import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'VideoPlaylist',
  viewBox: '0 0 20 20',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <>
      <rect
        x="1"
        y="5"
        width="15"
        height="12"
        rx="1"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 8L12 11L7 14V8V8Z"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 1.5H13"
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
