import { createContext } from "react";

export const AppContext = createContext("devnewsbucket");

export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
