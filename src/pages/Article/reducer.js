import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "setArticleData":
      if (!action.error) {
        return {
          ...state,
          article: action.payload.payload.results[0],
          loading: false,
        };
      } else {
        return {
          ...state,
          loading: false,
        };
      }
    case "resetLoader":
      return {
        ...state,
        loading: true,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export const useArticleReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    article: { fields: {} },
    loading: true,
  });
  return [state, dispatch];
};
