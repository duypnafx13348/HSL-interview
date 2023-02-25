import { ArrowDropDownRounded } from '@mui/icons-material';
import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

import { colors, customColors } from '../colors';

export const MuiSelect: {
  defaultProps?: ComponentsProps['MuiSelect'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiSelect'];
  variants?: ComponentsVariants['MuiSelect'];
} = {
  defaultProps: {
    variant: 'standard',
    IconComponent: ArrowDropDownRounded,
  },
  styleOverrides: {
    select: {
      height: '31px',
      lineHeight: '31px',
      p: {
        fontWeight: 600,
        fontSize: '14px',
        color: customColors.greyScale.heading,
      },
    },
    icon: {
      color: colors.primary.dark,
    },
  },
};
