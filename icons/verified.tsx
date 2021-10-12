import { createIcon } from '@chakra-ui/react';

export default createIcon({
  defaultProps: {
    width: 4,
    height: 4,
    fill: 'green.500',
  },
  displayName: 'Verified',
  viewBox: '0 0 16 16',
  path: (
    <>
      <rect width="16" height="16" rx="8" fill="#7FBA7A" />
      <path
        d="M6.8 9L5.2 7.4L4 8.6L6.8 11.4L12 6.2L10.8 5L6.8 9Z"
        fill="white"
      />
    </>
  ),
});
