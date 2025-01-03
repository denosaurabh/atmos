import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'Emo',
  viewBox: '0 0 16 16',
  defaultProps: {
    width: 4,
    height: 4,
  },
  path: (
    <>
      <path
        d="M8 13C9.7 13 11 11.7 11 10H5C5 11.7 6.3 13 8 13Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 5C16 4 15.2 3.1 14.2 3C12.7 1.1 10.4 0 8 0C5.6 0 3.3 1.1 1.8 3C0.8 3.1 0 4 0 5V8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8V5ZM14 6V7H11V5H14V6ZM11 3H11.3C10.3 2.4 9.2 2 8 2C6.8 2 5.7 2.4 4.7 3H5C6.1 3 7 3.9 7 5H9C9 3.9 9.9 3 11 3ZM2 5H5V7H2V5ZM2.1 9C2.6 11.8 5 14 8 14C11 14 13.4 11.8 13.9 9H11C9.9 9 9 8.1 9 7H7C7 8.1 6.1 9 5 9H2.1Z"
        fill="currentColor"
      />
    </>
  ),
});
