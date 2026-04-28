"use client"

import { Provider } from "react-redux";
import type { ChildrenType } from "@/types/types";
import store from "@/redux/store";

const ReduxProvider = ({children}: ChildrenType) => {
  return (
    <Provider store={store}>{children}</Provider>
  );
};

export default ReduxProvider;