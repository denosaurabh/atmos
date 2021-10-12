import { createIcon } from '@chakra-ui/react';

export default createIcon({
  defaultProps: {
    width: 5,
    height: 5,
    fill: 'none',
    stroke: '#fff',
  },
  displayName: 'Discovery',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.27002 14.9519L9.8627 9.8627L14.9519 8.27002L13.3593 13.3593L8.27002 14.9519Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
      <circle
        cx="11.611"
        cy="11.611"
        r="9.61098"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </>
  ),
});
