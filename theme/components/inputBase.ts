import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

export const MuiInputBase: {
  defaultProps?: ComponentsProps['MuiInputBase'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiInputBase'];
  variants?: ComponentsVariants['MuiInputBase'];
} = {
  defaultProps: {
    disableInjectingGlobalStyles: true,
  },
  styleOverrides: {
    root: {
      marginTop: '0 !important',
    },
  },
};
