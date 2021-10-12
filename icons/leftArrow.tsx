import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'LeftArrow',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 7,
    height: 7,
  },
  path: (
    <>
      <path
        d="m12 1a11 11 0 1 0 11 11 11.013 11.013 0 0 0 -11-11zm0 20a9 9 0 1 1 9-9 9.01 9.01 0 0 1 -9 9z"
        stroke="currentColor"
      />
      <path
        d="m14.707 6.293a1 1 0 0 0 -1.414 0l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414l-4.293-4.293 4.293-4.293a1 1 0 0 0 0-1.414z"
        stroke="currentColor"
      />
    </>
  ),
});
