import { customColors } from '../colors';

export const MuiCheckbox = {
  styleOverrides: {
    root: {
      color: '#c4c4c4',
      '&.Mui-checked': {
        color: customColors.greyScale.bodyText,
      },
    },
  },
};
