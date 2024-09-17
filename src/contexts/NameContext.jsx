import { createContext } from "react";

export const NameContext = createContext();

const NameContainer = ({ children }) => {
  let obj = {
    name: "cocsit college",
  };

  return <NameContext.Provider value={obj}>{children}</NameContext.Provider>;
};

export default NameContainer;
