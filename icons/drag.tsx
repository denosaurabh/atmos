import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'Drag',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'grey',
    width: 8,
    height: 8,
  },
  path: (
    <>
      <circle cx="8" cy="4" r="2" />
      <circle cx="8" cy="12" r="2" />
      <circle cx="8" cy="20" r="2" />
      <circle cx="16" cy="4" r="2" />
      <circle cx="16" cy="12" r="2" />
      <circle cx="16" cy="20" r="2" />
    </>
  ),
});
