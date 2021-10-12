import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'List',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 6,
    height: 6,
  },
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 4.5H18.5C19.052 4.5 19.5 4.948 19.5 5.5V18.5C19.5 19.052 19.052 19.5 18.5 19.5H5.5C4.948 19.5 4.5 19.052 4.5 18.5V5.5C4.5 4.948 4.948 4.5 5.5 4.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8.5 9.5H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M8.5 14.5H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
});
