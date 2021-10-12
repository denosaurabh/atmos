import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'Hamburger',
  viewBox: '0 0 32 20',
  defaultProps: {
    width: 7,
    height: 7,
  },
  path: (
    <>
      <rect y="5" width="32" height="2" rx="1" fill="currentColor" />
      <rect y="13" width="32" height="2" rx="1" fill="currentColor" />
    </>
  ),
});
