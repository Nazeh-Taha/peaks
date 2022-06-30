import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "setBookmarksData":
      if (!action.error) {
        return {
          ...state,
          bookMarks: action.payload.payload.results,
          loading: false,
        };
      } else {
        return {
          ...state,
          loading: false,
        };
      }
    case "setOrderBy":
      return {
        ...state,
        orderByValue: action.payload,
      };
    case "resetLoader":
      return {
        ...state,
        loading: true,
      };
    case "offLoader":
      return {
        ...state,
        loading: false,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export const useBookMarksReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    bookMarks: [],
    loading: true,
  });
  return [state, dispatch];
};
