const buttonsTheme = {
  baseStyle: () => {
    return {
      backgroundColor: 'primary',
      color: 'white',
      fontFamily: 'body',
      fontWeight: 'semibold',
      width: 'max-content',
      // To be fixed in future
      _loading: {
        _hover: {
          opacity: 0.3,
          backgroundColor: 'primary',
        },
      },
    };
  },
  sizes: {
    base: {
      rounded: '2xl',
      paddingX: { base: '1.5rem', sl: '1.8rem' },
      paddingY: { base: '1.2rem', sl: '1.3rem' },
      borderRadius: '2xl',
      fontSize: 'sm',
    },
    sm: {
      paddingX: { base: '1.5rem', sl: '1.9rem' },
      paddingY: { base: '1.5rem', sl: '1.7rem' },
      borderRadius: 'xl',
      fontSize: { base: '0.8rem', sl: 'sm' },
    },
    'nav-button': (props) => {
      return {
        paddingY: props._active ? '1.1rem' : '0.8rem',
        paddingX: 4,
        borderRadius: 'xl',
        width: 'full',
      };
    },
  },
  variants: {
    primary: { color: 'white', backgroundColor: 'primary' },
    secondary: { color: 'white', backgroundColor: 'secondary-s-medium' },
    orange: { backgroundColor: 'accent02-s-dark', color: 'white' },
    yellow: { backgroundColor: 'accent02', color: 'grey-s-darkest' },
    pink: { backgroundColor: 'accent01', color: 'grey-s-darkest' },
    light: ({ colorMode }) => ({
      color: colorMode === 'light' ? 'grey-s-darkest' : 'white-700',
      backgroundColor: colorMode === 'light' ? 'grey-s-light' : 'white-100',
    }),

    nav: (props) => {
      const { _active, extended } = props;

      // Color based on button active prop (only for menu button)
      return {
        backgroundColor: _active ? 'primary' : '',
        color: _active ? 'white' : 'grey-o-dark',
        fontWeight: _active ? 'semibold' : 'normal',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: 'small',
        span: {
          marginRight: !extended ? '20rem' : '0.7rem',
          transition: 'ease',
          duration: '0.5s',
        },
        _hover: {},
        _active: {},
      };
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'base',
  },
};

export default buttonsTheme;
