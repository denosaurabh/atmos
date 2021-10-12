import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'Wallet',
  viewBox: '0 0 24 24',
  defaultProps: {
    width: 5,
    height: 5,
    fill: 'none',
  },
  path: (
    <>
      <path
        stroke="currentColor"
        d="M21.639 14.396H17.59a2.693 2.693 0 01-2.693-2.692 2.693 2.693 0 012.693-2.69h4.048M18.049 11.643h-.312"
      />
      <path
        stroke="currentColor"
        d="M7.748 3h8.643a5.248 5.248 0 015.248 5.248v7.177a5.248 5.248 0 01-5.248 5.247H7.748A5.248 5.248 0 012.5 15.425V8.248A5.248 5.248 0 017.748 3z"
      />
      <path stroke="currentColor" d="M7.036 7.538h5.399" />
    </>
  ),
});
