const Heading = {
  variants: {
    default: ({ colorMode }) => ({
      color: colorMode === 'light' ? 'grey-primary' : 'white-700',
    }),
  },
  defaultProps: {
    variant: 'default',
  },
};

export default Heading;
