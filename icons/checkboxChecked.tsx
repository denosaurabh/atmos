import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'CheckBoxChecked',
  viewBox: '0 0 16 16',
  defaultProps: {
    width: 8,
    height: 8,
  },
  path: (
    <>
      <rect width="16" height="16" rx="4" fill="#6C5DD3" />
      <path
        d="M6.8 8.2998L5.2 6.6998L4 7.8998L6.8 10.6998L12 5.4998L10.8 4.2998L6.8 8.2998Z"
        fill="white"
      />
    </>
  ),
});
