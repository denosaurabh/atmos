import { useState, createContext, useContext } from 'react';

export interface useUII {
  sidebarExtended: boolean;
  sidebarShow: boolean;
  showCourseLearningSidebar: boolean;
  setSidebarExtended: (boolean: boolean) => void;
  setSidebarShow: (boolean: boolean) => void;
  setShowCourseLearningSidebar: (boolean: boolean) => void;
}

const UIContext = createContext<useUII>({
  sidebarExtended: false,
  sidebarShow: false,
  showCourseLearningSidebar: false,
  setSidebarExtended: () => {},
  setSidebarShow: () => {},
  setShowCourseLearningSidebar: () => {},
});

export const UIContextProvider: React.FC = ({ children }) => {
  const [sidebarExtended, setSidebarExtended] = useState(false);
  const [sidebarShow, setSidebarShow] = useState(false);
  const [showCourseLearningSidebar, setShowCourseLearningSidebar] = useState(
    false
  );

  const value = {
    sidebarExtended,
    sidebarShow,
    showCourseLearningSidebar,
    setSidebarExtended: (boolean: boolean) => setSidebarExtended(boolean),
    setSidebarShow: (boolean: boolean) => setSidebarShow(boolean),
    setShowCourseLearningSidebar: (boolean: boolean) =>
      setShowCourseLearningSidebar(boolean),
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = (): useUII => useContext(UIContext);
