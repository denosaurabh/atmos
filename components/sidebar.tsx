import { memo } from 'react';
import { Flex, Portal, useColorModeValue } from '@chakra-ui/react';

import {
  Header,
  FeedsSection,
  InsightsSection,
  CourseLearningSection,
  TopInstructorsSection,
  BottomSection,
} from '@shared/sidebar';
import { SidebarI } from '@lib/components';
import { useAuth } from '@contexts/useAuth';

const Sidebar = ({
  breakpointForResSidebar,
  extendedWidth,
  smallWidth,
  courseLearningWidth,
  ui,
}: SidebarI) => {
  const { user } = useAuth();

  const {
    sidebarShow,
    sidebarExtended,
    setSidebarExtended,
    showCourseLearningSidebar,
  } = ui;

  const backgroundColor = useColorModeValue('white', 'grey-s-x-dark');
  const borderColor = useColorModeValue('grey-s-light', 'white-100');

  return (
    <Portal>
      <Flex
        flexDirection="row"
        position="fixed"
        top={0}
        left={0}
        overflowX="hidden"
        overflowY="scroll"
        direction="column"
        backgroundColor={backgroundColor}
        zIndex={{ base: 'unset', [breakpointForResSidebar[0]]: 100 }}
        as="nav"
        shadow={{ base: 'xl', [breakpointForResSidebar[0]]: 'unset' }}
        width="auto"
        minHeight="100vh"
        height="100%"
        sx={{
          overscrollBehaviorX: 'contain',
          scrollbarWidth: 'none', // For Firefox
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        transition="ease"
        transitionDuration="220ms"
        willChange="transform"
        visibility={{
          base: sidebarShow ? 'unset' : 'hidden',
          [breakpointForResSidebar[0]]: 'visible',
        }}
        transform={{
          base: sidebarShow ? 'translateX(0vw)' : 'translateX(-110vw)',
          [breakpointForResSidebar[0]]: 'unset',
        }}
      >
        <Flex
          flexDirection="column"
          transition="ease"
          transitionDuration="220ms"
          width={sidebarExtended ? `${extendedWidth}rem` : `${smallWidth}rem`}
          padding={sidebarExtended ? '1.5rem' : '1rem'}
          height="100%"
          borderRight="2px"
          borderColor={borderColor}
        >
          <Header
            toggleExtended={() => setSidebarExtended(!sidebarExtended)}
            breakpointForResSidebar={breakpointForResSidebar}
            extended={sidebarExtended}
          />
          <FeedsSection
            extended={sidebarExtended}
            isUser={!!user}
            user={user}
          />
          {user ? <InsightsSection extended={sidebarExtended} /> : null}

          {!user ? <TopInstructorsSection extended={sidebarExtended} /> : null}
          <BottomSection extended={sidebarExtended} />
        </Flex>
        {showCourseLearningSidebar ? (
          <Flex
            direction="column"
            borderRight="2px"
            width={`${courseLearningWidth}rem`}
            padding={'0.8rem'}
            borderColor={borderColor}
            height="100%"
          >
            <CourseLearningSection />
          </Flex>
        ) : null}
      </Flex>
    </Portal>
  );
};

export default memo(Sidebar, (prevProps, nextProps) => {
  return (
    prevProps.breakpointForResSidebar === nextProps.breakpointForResSidebar &&
    prevProps.extendedWidth === nextProps.extendedWidth &&
    prevProps.smallWidth === nextProps.smallWidth &&
    prevProps.courseLearningWidth === nextProps.courseLearningWidth &&
    // ----
    prevProps.ui.sidebarShow === nextProps.ui.sidebarShow &&
    prevProps.ui.sidebarExtended === nextProps.ui.sidebarExtended &&
    prevProps.ui.showCourseLearningSidebar ===
      nextProps.ui.showCourseLearningSidebar
  );
});
