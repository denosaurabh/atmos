import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'Heart',
  viewBox: '0 0 17 15',
  defaultProps: {
    width: 5,
    height: 5,
    fill: 'none',
    stroke: 'currentcolor',
  },
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.8285 2.1725C13.2665 0.6105 10.7335 0.6105 9.1715 2.1725C8.8915 2.4525 8.6805 2.7705 8.5005 3.1015C8.3205 2.7705 8.1095 2.4515 7.8285 2.1715C6.2665 0.6095 3.7335 0.6095 2.1715 2.1715C0.6095 3.7335 0.6095 6.2665 2.1715 7.8285L8.5005 14.0005L14.8285 7.8285C16.3915 6.2665 16.3915 3.7345 14.8285 2.1725Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});
