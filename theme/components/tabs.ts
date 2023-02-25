import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

export const MuiTabs: {
  defaultProps?: ComponentsProps['MuiTabs'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTabs'];
  variants?: ComponentsVariants['MuiTabs'];
} = { defaultProps: { variant: 'fullWidth' } };
