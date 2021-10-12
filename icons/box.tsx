import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'Box',
  viewBox: '0 0 19 20',
  path: (
    <>
      <path fill="currentColor" d="M1 5.5l8.25 3 8.25-3M9.25 8.5V19" />
      <path
        fill="currentColor"
        d="M17.5 15.4L9.25 19 1 15.4V4.6L9.25 1l8.25 3.6v10.8z"
      />
    </>
  ),
});
