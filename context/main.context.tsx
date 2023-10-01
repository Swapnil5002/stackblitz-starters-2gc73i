import { useContext, createContext, useState, useEffect, useMemo } from 'react';

const AppContext = createContext({
  showErrorModal: false,
  setShowErrorModal: (_data) => {
    // This is intentional
  },
  handleErrorClick: (_val) => {},
});

const AppProvider = ({ children }) => {
  const [showErrorModal, setShowErrorModal] = useState(false);
  const handleErrorClick = () => {
    setShowErrorModal((prev) => !prev);
  };
  const errorPopUp = useMemo(() => {
    return (
      <>
        {showErrorModal && (
          <div onClick={handleErrorClick}>This is error pop up.</div>
        )}
      </>
    );
  }, []);

  return (
    <AppContext.Provider
      value={{ showErrorModal, setShowErrorModal, handleErrorClick }}
    >
      {errorPopUp}
      {children}
    </AppContext.Provider>
  );
};
const AppUseContext = () => useContext(AppContext);

export { AppContext, AppUseContext, AppProvider };
