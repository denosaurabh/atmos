const Menu = {
  parts: ['list', 'item'],
  baseStyle: {
    list: {
      paddingX: '4',
      paddingY: '6',
      borderRadius: '2xl',
      border: 'none',
      shadow: '2xl',
    },
    item: {
      paddingY: 3.5,
      paddingX: 5,
      borderRadius: 'xl',
      fontFamily: 'body',
      fontSize: '0.8rem',
      fontWeight: 'medium',
      transition: 'color 0.2s',
    },
  },
  sizes: {
    md: {
      list: {
        width: 'xs',
      },
    },
  },
  variants: {
    default: (props) => {
      const { colorMode } = props;

      return {
        list: {
          paddingX: 2,
        },
        item: {
          _hover: {
            backgroundColor: colorMode === 'dark' ? '' : 'grey-s-light',
          },
        },
      };
    },
    profile: (props) => {
      const { colorMode } = props;

      return {
        item: {
          color: colorMode === 'dark' ? 'white-400' : 'grey-o-dark',
          svg: {
            marginRight: 4,
          },
          _hover: {
            color: colorMode === 'dark' ? 'white' : 'secondary-s-medium',
            backgroundColor: colorMode === 'dark' ? '' : 'grey-s-light',
          },
        },
      };
    },
  },
  defaultProps: {
    variant: 'default',
  },
};

export default Menu;
