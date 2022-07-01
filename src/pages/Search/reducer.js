import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "setSearchData":
      if (!action.error) {
        return {
          ...state,
          searchNews: action.payload.payload?.results || [],
          loading: false,
          totalPages: action.payload.payload?.pages || 1,
          loadingMore: false,
        };
      } else {
        return {
          ...state,
          loading: false,
        };
      }
    case "setMoreData":
      if (!action.error) {
        return {
          ...state,
          searchNews: [
            ...state.searchNews,
            ...(action.payload.payload?.results || []),
          ],
          loadingMore: false,
        };
      } else {
        return {
          ...state,
          loading: false,
          loadingMore: false,
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
    case "loadMorePage":
      return {
        ...state,
        loadingMore: true,
        page: state.page + 1,
      };
    case "resetPage":
      return {
        ...state,
        page: 1,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export const useSearchReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    searchNews: [],
    loading: true,
    loadingMore: false,
    setOrderBy: "newest",
    page: 1,
    totalPages: 1,
  });
  return [state, dispatch];
};
