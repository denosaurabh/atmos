import { ComponentMultiStyleConfig } from '@chakra-ui/react';

const Input: ComponentMultiStyleConfig = {
  parts: ['field', 'addon'],
  sizes: {
    base: {
      addon: {
        mr: 4,
      },
      field: {
        borderRadius: 'xl',
        height: 12,
        px: 6,
        py: '1.8rem',
      },
    },
    search: {
      addon: {
        mr: 4,
      },
      field: {
        borderRadius: 'xl',
        height: 12,
      },
    },
  },
  variants: {
    default: ({ colorMode, size }) => ({
      field: {
        border: 'none',
        outline: 'none',
        fontSize: 'sm',
        fontWeight: 'medium',
        color: colorMode === 'light' ? 'grey-s-darkest' : 'white-700',
        backgroundColor: colorMode === 'light' ? 'grey-s-light' : 'white-100',
        boxSizing: 'border-box',

        transition: '0.2s all',

        _focus:
          size !== 'search'
            ? {
                outline: '2px solid',
                outlineColor: 'primary',
              }
            : {},
      },
      addon: {
        cursor: 'pointer',
      },
    }),
  },
  defaultProps: {
    size: 'base',
    variant: 'default',
  },
};

export default Input;
