import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'Video',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
    fill: 'none',
    stroke: 'grey-s-dark',
  },
  path: (
    <>
      <path
        stroke="currentColor"
        opacity="0.4"
        d="M17 9.6L18.8314 8.2814C20.1544 7.32887 22 8.27427 22 9.90447V14.0955C22 15.7257 20.1544 16.6711 18.8314 15.7186L17 14.4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        stroke="currentColor"
        x="3"
        y="3"
        width="14"
        height="18"
        rx="4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
