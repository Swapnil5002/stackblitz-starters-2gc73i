import { useContext, createContext, useState, useEffect, useMemo } from 'react';

const AppContext = createContext({
  showErrorModal: false,
  setShowErrorModal: (_data) => {
    // This is intentional
  },
});

const AppProvider = () => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const errorPopUp = useMemo(() => {
    return <>{showErrorModal && <div>This is error pop up.</div>}</>;
  }, []);

  return (
    <AppContext.Provider value={{ showErrorModal, setShowErrorModal }}>
      {errorPopUp}
    </AppContext.Provider>
  );
};
const AppUseContext = () => useContext(AppContext);

export { AppContext, AppUseContext, AppProvider };
