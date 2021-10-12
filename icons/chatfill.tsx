import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'ChatFill',
  viewBox: '0 0 20 20',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <path
      d="M9 1C4.6 1 1 4.1 1 8C1 11.9 4.6 15 9 15C9.4 15 9.8 15 10.1 14.9L15 17V12.6C16.2 11.4 17 9.8 17 8C17 4.1 13.4 1 9 1Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
  ),
});
