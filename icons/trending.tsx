import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'Trending',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <>
      <path
        opacity="0.4"
        d="M7.24487 14.7815L10.238 10.8913L13.6522 13.5732L16.5813 9.79291"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="19.9954"
        cy="4.20024"
        r="1.9222"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9245 3.12015H7.65679C4.64535 3.12015 2.77808 5.25287 2.77808 8.26431V16.3467C2.77808 19.3581 4.60874 21.4817 7.65679 21.4817H16.2609C19.2724 21.4817 21.1396 19.3581 21.1396 16.3467V9.30779"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
