import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

import { colors, customColors } from '../colors';

export const MuiInput: {
  defaultProps?: ComponentsProps['MuiInput'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiInput'];
  variants?: ComponentsVariants['MuiInput'];
} = {
  styleOverrides: {
    root: {
      fontWeight: 600,
      fontSize: '14px',
      color: customColors.greyScale.heading,
      input: {
        height: '31px',
        '&::placeholder': {
          color: customColors.greyScale.placeholder,
          opacity: 1,
        },
      },
      '&::before': {
        borderBottomColor: customColors.greyScale.placeholder,
      },
      '&:hover:not(.Mui-disabled)::before': {
        borderBottomWidth: '1px',
        borderBottomColor: customColors.greyScale.heading,
      },
      '&::after': {
        borderBottomWidth: '1px',
        borderBottomColor: customColors.primaryBlue.lighter,
      },
      '&.Mui-error': {
        input: {
          color: colors.error.main,
        },
      },
    },
  },
};
