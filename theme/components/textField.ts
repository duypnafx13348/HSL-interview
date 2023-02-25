import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

export const MuiTextField: {
  defaultProps?: ComponentsProps['MuiTextField'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTextField'];
  variants?: ComponentsVariants['MuiTextField'];
} = {
  defaultProps: {
    variant: 'standard',
  },
};
