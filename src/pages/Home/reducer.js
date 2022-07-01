import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "setHomeDate":
      if (!action.error) {
        return {
          ...state,
          firstTopNews: action.firstPayload.payload?.results.slice(0, 5) || [],
          secondTopNews: action.firstPayload.payload?.results.slice(5) || [],
          sportsNews: action.secondPayload.payload?.results || [],
          firstSectionLoading: false,
          secondSectionLoading: false,
        };
      } else {
        return {
          ...state,
          firstSectionLoading: false,
          secondSectionLoading: false,
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
        firstSectionLoading: true,
        secondSectionLoading: true,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export const useHomeReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    firstTopNews: [],
    secondTopNews: [],
    sportsNews: [],
    firstSectionLoading: true,
    secondSectionLoading: true,
    setOrderBy: "newest",
  });
  return [state, dispatch];
};
