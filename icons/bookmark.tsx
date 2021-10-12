import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'Bookmark',
  viewBox: '0 0 19 21',
  defaultProps: {
    width: 5,
    height: 5,
  },
  path: (
    <>
      <path
        stroke="currentColor"
        fill="none"
        d="M12.966 14.474h-7.22M12.966 10.287h-7.22M8.5 6.11H5.747"
      />
      <path
        stroke="currentColor"
        fill="none"
        d="M13.158 1l-7.689.004C2.709 1.021 1 2.837 1 5.607v9.196c0 2.784 1.722 4.607 4.506 4.607l7.689-.003c2.76-.017 4.47-1.834 4.47-4.604V5.607C17.665 2.823 15.942 1 13.158 1z"
      />
    </>
  ),
});
