import { useEffect } from 'react';
import { Flex, Box, useColorModeValue } from '@chakra-ui/react';
import { Header, Sidebar } from '@components/index';
import { useRouter } from 'next/router';
import { useTheme, useMediaQuery } from '@chakra-ui/react';
import { PageI } from '@lib/layouts';
import { useUI } from '@contexts/useUI';

const Page = ({ children, mainContentPadding }: PageI) => {
  const ui = useUI();
  const {
    sidebarExtended,
    showCourseLearningSidebar,
    setSidebarExtended,
    setSidebarShow,
    setShowCourseLearningSidebar,
  } = ui;

  const breakpointForResSidebar = ['lg', '976px'];
  const backgroundColor = useColorModeValue('white', 'grey-s-x-dark');

  const extendedWidth = 15;
  const smallWidth = 5;

  const courseLearningWidth = 5.2;

  const router = useRouter();
  const { breakpoints } = useTheme();
  const [isSmallerThanLG] = useMediaQuery(`(max-width: ${breakpoints.lg})`);

  useEffect(() => {
    isSmallerThanLG
      ? setSidebarExtended(true) // Always Extended in Mobile
      : setSidebarExtended(sidebarExtended); // Toogle Extend on Hamburger Click in Sidebar
    isSmallerThanLG ? setSidebarShow(false) : setSidebarShow(true);
  }, [isSmallerThanLG]);

  useEffect(() => {
    setShowCourseLearningSidebar(false);

    if (router.pathname.includes('/course/[uid]/learning')) {
      setShowCourseLearningSidebar(true);
    }
  }, [router]);

  let completeWidth = sidebarExtended ? extendedWidth : smallWidth;
  if (showCourseLearningSidebar) completeWidth += courseLearningWidth;

  return (
    <Flex
      backgroundColor={backgroundColor}
      flexDirection="column"
      minHeight="100vh"
      sx={{ boxOrient: 'vertical', boxDirection: 'normal' }}
    >
      <Sidebar
        breakpointForResSidebar={breakpointForResSidebar}
        extendedWidth={extendedWidth}
        smallWidth={smallWidth}
        courseLearningWidth={courseLearningWidth}
        ui={ui}
      />

      <Flex
        direction="column"
        paddingLeft={{
          base: 0,
          [breakpointForResSidebar[0]]: `${completeWidth}rem`,
        }}
      >
        <Header
          breakpointForResSidebar={breakpointForResSidebar}
          paddingLeft={completeWidth}
          ui={ui}
        />

        <Box
          width="auto"
          as="main"
          paddingX={mainContentPadding ?? { base: 4, sl: 10 }}
          paddingY={mainContentPadding ?? 28}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Page;
