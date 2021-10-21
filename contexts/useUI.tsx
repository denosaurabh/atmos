import { useState, createContext, useContext, useEffect } from 'react';

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
  const [showCourseLearningSidebar, setShowCourseLearningSidebar] =
    useState(false);

  useEffect(() => {
    if (!window) return;

    const sidebarExtendedLocal =
      localStorage.getItem('sidebarExtended') === 'true' ? true : false;
    const sidebarShowLocal =
      localStorage.getItem('sidebarShow') === 'true' ? true : false;
    const showCourseLearningSidebarLocal =
      localStorage.getItem('showCourseLearningSidebar') === 'true'
        ? true
        : false;

    setSidebarExtended(sidebarExtendedLocal);
    setSidebarShow(sidebarShowLocal);
    setShowCourseLearningSidebar(showCourseLearningSidebarLocal);
  }, []);

  const value = {
    sidebarExtended,
    sidebarShow,
    showCourseLearningSidebar,
    setSidebarExtended: (boolean: boolean) => {
      localStorage.setItem('sidebarExtended', `${boolean}`);
      setSidebarExtended(boolean);
    },
    setSidebarShow: (boolean: boolean) => {
      localStorage.setItem('sidebarShow', `${boolean}`);
      setSidebarShow(boolean);
    },
    setShowCourseLearningSidebar: (boolean: boolean) => {
      localStorage.setItem(
        'showCourseLearningSidebar',
        `${boolean}`
      );
      setShowCourseLearningSidebar(boolean);
    },
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = (): useUII => useContext(UIContext);
