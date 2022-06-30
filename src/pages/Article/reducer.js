import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "setArticleData":
      if (!action.error) {
        return {
          ...state,
          article: action.payload.payload.results[0],
          loading: false,
          isBookMark: action.isBookMark,
        };
      } else {
        return {
          ...state,
          loading: false,
        };
      }
    case "addRemoveBookMark":
      return {
        ...state,
        isBookMark: !state.isBookMark,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export const useArticleReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    article: { fields: {} },
    loading: true,
    isBookMark: false,
  });
  return [state, dispatch];
};