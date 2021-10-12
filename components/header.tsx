import { memo } from 'react';
import {
  Flex,
  CloseButton,
  Box,
  useColorModeValue,
  Portal,
} from '@chakra-ui/react';

import { Categories, Search, RightBox } from '@shared/header';
import Hamburger from '@icons/hamburger';
import { HeaderI } from '@lib/components';

const Header = ({ breakpointForResSidebar, paddingLeft, ui }: HeaderI) => {
  const { sidebarShow, setSidebarShow } = ui;

  const backgroundColor = useColorModeValue('white', 'grey-s-x-dark');
  const borderColor = useColorModeValue('grey-s-light', 'white-100');

  return (
    <Portal>
      <Flex
        paddingLeft={{
          base: '5',
          [breakpointForResSidebar[0]]: `${paddingLeft}rem`,
        }}
        paddingRight={5}
        as="header"
        position="fixed"
        top={0}
        width="full"
        height="5.5rem"
        flexDirection="row"
        alignItems="center"
        zIndex={{ base: 10, xs: 'unset' }}
        backgroundColor={backgroundColor}
        borderBottom="2px"
        borderColor={borderColor}
      >
        <Box marginRight={4}>
          {sidebarShow ? (
            <CloseButton
              display={{ base: 'unset', [breakpointForResSidebar[0]]: 'none' }}
              onClick={() => setSidebarShow(!sidebarShow)}
            />
          ) : (
            <Hamburger
              display={{ base: 'unset', [breakpointForResSidebar[0]]: 'none' }}
              _hover={{ cursor: 'pointer' }}
              onClick={() => setSidebarShow(!sidebarShow)}
            />
          )}
        </Box>

        <Categories />
        <Search />
        <RightBox />
      </Flex>
    </Portal>
  );
};

export default memo(
  Header,
  (prev, next) =>
    prev.breakpointForResSidebar === next.breakpointForResSidebar &&
    prev.paddingLeft === next.paddingLeft &&
    prev.ui === next.ui
);
