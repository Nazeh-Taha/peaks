import { useContext, createContext, useReducer } from "react";
export const appState = {
  searchText: "",
  contentType: "home",
};

export function appReducer(state, action) {
  switch (action.type) {
    case "setSearchText":
      return {
        ...state,
        searchText: action.payload,
      };
    case "backToHomePage":
      return {
        ...state,
        contentType: "home",
        searchText: "",
      };
    case "goToSearchPage":
      return {
        ...state,
        contentType: "search",
      };
    default:
      throw new Error();
  }
}

export function makeAppResourcesStates() {
  const initialState = [{}, () => null];
  const Context = createContext(initialState);

  function ContextProvider({ children }) {
    const [state, dispatcher] = useReducer(appReducer, appState);
    return (
      <Context.Provider value={[state, dispatcher]}>
        {children}
      </Context.Provider>
    );
  }

  const useCustomContext = () => useContext(Context);
  return [ContextProvider, useCustomContext];
}
