"use client";

import GlobalContextProvider from "@/context/GlobalContext";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const RootProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </Provider>
  );
};

export default RootProviders;
