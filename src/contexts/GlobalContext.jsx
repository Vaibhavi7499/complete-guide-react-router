import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalContainer = (props) => {
  let [isLogin, setIsLogin] = useState(false);

  let contextValue = {
    isLogin,
    setIsLogin,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContainer;
