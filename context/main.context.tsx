import { useContext, createContext, useState } from 'react';

export const AppContext = createContext({});

const AppProvider = () => {
  const [showErrorModal, setShowErrorModal] = useState(false);

  return (
    <AppContext.Provider
      value={{ showErrorModal, setShowErrorModal }}
    ></AppContext.Provider>
  );
};
const AppUseContext = () => useContext(AppContext);

export { AppUseContext, AppProvider };
