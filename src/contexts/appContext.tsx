import { createContext, useState } from "react";

type AppType = {
  isMenuActive: boolean;
  setIsMenuActive: (value: boolean) => void;
};

export const AppContext = createContext<AppType>({} as AppType);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  type ValueType = {
    isMenuActive: boolean;
    setIsMenuActive: (value: boolean) => void;
  };

  // const values: ValueType = {
  //   isMenuActive,
  //   setIsMenuActive,
  // };

  return (
    <AppContext.Provider value={{ isMenuActive, setIsMenuActive }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
