const Select = {
  parts: ['field', 'icon'],
  baseStyle: {
    width: 'max-content',
  },
  sizes: {
    base: {
      field: {
        borderRadius: '2xl',
        paddingY: 5,
        paddingX: 5,
      },
    },
  },
  variants: {
    default: ({ colorMode }) => ({
      field: {
        fontSize: 'sm',
        fontWeight: 'medium',
        color: colorMode === 'light' ? 'grey' : 'white-700',
        backgroundColor: colorMode === 'light' ? 'grey-s-light' : 'white-100',
      },
    }),
  },
  defaultProps: {
    size: 'base',
    variant: 'default',
  },
};

export default Select;
