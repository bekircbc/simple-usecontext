import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const title = "My Page";

  return (
    <AppContext.Provider
      value={{
        title,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
