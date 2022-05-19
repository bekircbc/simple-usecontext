import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const title = "My Page";
  const pageChildTitle = "Page Child Title";

  return (
    <AppContext.Provider
      value={{
        title,
        pageChildTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
