const Tabs = {
  parts: ['root', 'tablist', 'tab', 'tabpanels', 'tabpanel', 'indicator'],
  variants: {
    base: () => {
      return {
        root: {
          borderBottom: '0 solid transparent',
        },
        tab: {
          mx: 4,
          border: '2px solid',
          borderColor: 'accent02-s-dark',
          rounded: '2xl',
          fontWeight: 'medium',
          _hover: {
            backgroundColor: 'accent02-s-dark',
            color: 'white',
          },
          _selected: {
            backgroundColor: 'accent02-s-dark',
            color: 'white',
          },
        },
      };
    },
  },
  defaultProps: {
    variant: 'base',
  },
};

export default Tabs;
