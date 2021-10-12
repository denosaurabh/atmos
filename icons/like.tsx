import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'Like',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 6,
    height: 6,
  },
  path: (
    <>
      <rect
        x="4.5"
        y="11.5"
        width="3"
        height="8"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 19.5H16.4C17.3372 19.4998 18.1486 18.8489 18.352 17.934L19.463 12.934C19.5948 12.3412 19.4501 11.7206 19.0696 11.2472C18.6892 10.7738 18.1143 10.4989 17.507 10.5H13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5L9.5 10.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
