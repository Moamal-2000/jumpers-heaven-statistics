"use client";

import GlobalContextProvider from "@/Context/GlobalContext";
import { store } from "@/Redux/store";
import { Provider } from "react-redux";

const RootProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </Provider>
  );
};

export default RootProviders;
