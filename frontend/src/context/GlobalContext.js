"use client";

import { createContext, useContext } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const states = {};

  return <GlobalContext value={states}>{children}</GlobalContext>;
};

export default GlobalContextProvider;

export const useGlobalContext = () => useContext(GlobalContext);
