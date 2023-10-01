import { useContext, createContext, useState } from 'react';

const AppContext = createContext({
  showErrorModal: false,
  setShowErrorModal: (_data) => {
    // This is intentional
  },
});

const AppProvider = () => {
  const [showErrorModal, setShowErrorModal] = useState(false);

  return (
    <AppContext.Provider
      value={{ showErrorModal, setShowErrorModal }}
    ></AppContext.Provider>
  );
};
const AppUseContext = () => useContext(AppContext);

export { AppContext, AppUseContext, AppProvider };
