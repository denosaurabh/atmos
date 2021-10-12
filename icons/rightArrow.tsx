import { createIcon } from '@chakra-ui/react';

export default createIcon({
  displayName: 'RightArrow',
  viewBox: '0 0 30 30',
  defaultProps: {
    width: 8,
    height: 8,
  },
  path: (
    <path
      id="Shape"
      d="m16 4c6.627417 0 12 5.372583 12 12s-5.372583 12-12 12-12-5.372583-12-12 5.372583-12 12-12zm0 2c-5.5228475 0-10 4.4771525-10 10s4.4771525 10 10 10 10-4.4771525 10-10-4.4771525-10-10-10zm-1.2928932 4.2928932 5.7071068 5.7071068-5.7071068 5.7071068-1.4142136-1.4142136 4.2921068-4.2928932-4.2921068-4.2928932z"
      stroke="currentColor"
      fillRule="nonzero"
    />
  ),
});
