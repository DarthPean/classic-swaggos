import React, { createContext, useEffect, useReducer } from "react";
import filterInitialState from "./initialStates/filterInitialState";
import filter from "./reducers/filter";

export const GlobalContext = createContext({});

function GlobalProvider({ children }) {
  const [filterState, filterStateDispatch] = useReducer(filter, filterInitialState
  //   , () => {
  //   const localAuthState = localStorage.getItem("filter");
  //   return localAuthState ? JSON.parse(localAuthState) : filterInitialState;
  // }
  );

  // useEffect(() => {
  //   localStorage.setItem("filter", JSON.stringify(filterState));
  // }, [filterState]);

  return (
    <GlobalContext.Provider
      value={{
        filterState,
        filterStateDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export default GlobalProvider;
