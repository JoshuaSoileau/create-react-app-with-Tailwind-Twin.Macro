import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ExampleContext = React.createContext({
  data: {},
  setData: () => {},
});

export const ExampleProvider = ({ children }) => {
  const [data, setData] = useLocalStorage("some-key", {});

  return (
    <ExampleContext.Provider
      value={{
        ...data,
        setData,
      }}
    >
      {children}
    </ExampleContext.Provider>
  );
};

export const useExample = () => {
  const context = useContext(ExampleContext);

  if (context === undefined || context === null) {
    throw new Error("useExample must be used within a ExampleProvider");
  }
  return context;
};
