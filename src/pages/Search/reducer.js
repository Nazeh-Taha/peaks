import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "setSearchData":
      if (!action.error) {
        return {
          ...state,
          searchNews: action.payload.payload.results,
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
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export const useSearchReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    searchNews: [],
    loading: true,
    setOrderBy: "newest",
  });
  return [state, dispatch];
};
