import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'Menu',
  viewBox: '0 0 24 6',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <>
      <circle
        cx="12"
        cy="3"
        r="2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
      <circle
        cx="3"
        cy="3"
        r="2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
      <circle
        cx="21"
        cy="3"
        r="2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </>
  ),
});
