import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

import { colors, customColors } from '../colors';

export const MuiInputLabel: {
  defaultProps?: ComponentsProps['MuiInputLabel'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiInputLabel'];
  variants?: ComponentsVariants['MuiInputLabel'];
} = {
  defaultProps: {
    shrink: true, // to show placeholder
    disableAnimation: true,
  },
  styleOverrides: {
    root: {
      fontFeatureSettings: "'ss01' on, 'ss03' on",
      color: customColors.greyScale.placeholder + '!important',
      transform: 'scale(1)',
      // lineHeight: '17px',
      // overflow: 'visible',
      position: 'relative',
      lineHeight: 'initial',
      // overflow: 'visible',
      whiteSpace: 'initial',
      fontSize: '14px',
      '&.Mui-disabled': {
        textDecoration: 'line-through',
      },
    },
    asterisk: {
      color: colors.secondary.main,
    },
  },
};
