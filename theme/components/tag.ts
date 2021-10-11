const Tag = {
  parts: ['container', 'label', 'closeButton'],
  baseStyle: {
    container: {
      width: 'max-content',
      height: 'min-content',
      marginY: 2,

      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: 'xs',
    },
  },
  sizes: {
    default: {
      container: {
        borderRadius: 'lg',
        paddingX: 4,
        paddingY: 2,
      },
    },
    md: {
      container: {
        borderRadius: 'lg',
        padding: '0.8rem 1.1rem',
      },
    },
  },
  variants: {
    1001: {
      container: { backgroundColor: 'accent02-s-dark', color: 'white' },
      label: { color: 'white' },
    },
    1002: {
      label: { color: 'white' },
      container: { backgroundColor: 'secondary-s-medium', color: 'white' },
    },
    1003: ({ colorMode }) => ({
      label: {
        color:
          colorMode === 'light' ? 'secondary-s-medium' : 'secondary-s-medium',
      },
      container: {
        backgroundColor: colorMode === 'light' ? 'grey-s-light' : 'white-200',
        color:
          colorMode === 'light' ? 'secondary-s-medium' : 'secondary-s-medium',
      },
    }),
    1004: {
      label: { color: 'white' },
      container: { backgroundColor: 'grey-s-darkest', color: 'white' },
    },
    1005: {
      label: { color: 'primary' },
      container: { backgroundColor: 'accent01-s-dark', color: 'primary' },
    },
    1006: {
      label: { color: 'primary' },
      container: { backgroundColor: 'grey-s-light', color: 'primary' },
    },
  },
  defaultProps: {
    variant: '1001',
    size: 'default',
  },
};

export default Tag;
