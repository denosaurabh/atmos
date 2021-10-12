import { createIcon } from '@chakra-ui/icon';

export default createIcon({
  displayName: 'Bell',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
    stroke: 'grey',
    fill: 'none',
  },
  path: (
    <>
      <path
        stroke="currentColor"
        d="M19 11V8A7 7 0 105 8v3c0 3.3-3 4.1-3 6 0 1.7 3.9 3 10 3s10-1.3 10-3c0-1.9-3-2.7-3-6z"
      />
      <path
        stroke="currentColor"
        d="M12 22c-1.011 0-1.961-.034-2.855-.1a2.992 2.992 0 005.71 0c-.894.066-1.844.1-2.855.1z"
      />
    </>
  ),
});
