import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'CheckBox',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <>
      <rect
        x="1"
        y="1"
        width="14"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeOpacity="0.49776"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
