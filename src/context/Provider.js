import React from "react";
import { CounterProvider } from "./counter/counter";

export default function Provider({ children }) {
  return <CounterProvider>{children}</CounterProvider>;
}
