import React, { createContext, useReducer, useContext } from "react";
import {
  counterReducer,
  counterInitialState,
  counterReset
} from "./counterReducer";

const counterContext = createContext();

export function CounterProvider({ children }) {
  return (
    <counterContext.Provider
      value={useReducer(counterReducer, counterInitialState, counterReset)}
    >
      {children}
    </counterContext.Provider>
  );
}
export const useCounterValue = () => useContext(counterContext);
