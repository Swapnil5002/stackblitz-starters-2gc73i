import { useContext, createContext, useState } from 'react';

export const AppContext = createContext({});

const AppUseContext = () => useContext(AppContext);

const AppProvider = () => {
  const [showErrorModal, setShowErrorModal] = useState(false);

  return (
    <AppContext.Provider
      value={{ showErrorModal, setShowErrorModal }}
    ></AppContext.Provider>
  );
};

export { AppUseContext, AppProvider };
