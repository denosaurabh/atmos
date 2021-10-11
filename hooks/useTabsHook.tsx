import { ChangeEvent, useEffect, useState } from 'react';
import { ChakraTheme, useMediaQuery, useTheme } from '@chakra-ui/react';
import { useTabsHookI } from '@lib/hooks';

/* HOOK FOR HANDLING TABS USING SELECT (FOR SMALL SCREENS) AND TABS (IN LARGE SCREEN), CAUSE TABS BREAK THE LAYOUT IN SMALL SCREENS  */
const useTab = ({ changeAt }: useTabsHookI) => {
  const { breakpoints } = useTheme<ChakraTheme>();
  const [isSmallerThanBreakpoint] = useMediaQuery(
    `(max-width: ${breakpoints[changeAt]})`
  );

  const [currentTab, setCurrentTab] = useState<number>(0);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    isSmallerThanBreakpoint
  );

  /* I use useEffect and custom useState because, if not causes server and client hydration & render issues, good explanation here: https://github.com/vercel/next.js/discussions/17443 */
  useEffect(() => {
    setIsSmallScreen(isSmallerThanBreakpoint);
  }, [isSmallerThanBreakpoint]);

  // Change Menu for Tabs Click in Large Screen
  const onTabChange = (index: number) => {
    setCurrentTab(index);
  };

  // Change Menu for Select Input in Small Screen
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentTab(e.target.value);
  };

  return {
    currentTab,
    isSmallScreen,
    onTabChange,
    onSelectChange,
  };
};

export default useTab;
