export const MuiButton = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      fontSize: '14px',
      fontWeight: 700,
    },
    contained: {
      boxShadow: '0px 8px 20px rgba(12, 33, 64, 0.4)',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: 700,
      minHeight: '3.5rem',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    },
    text: {
      // minWidth: 0,
      lineHeight: 'initial',
      // padding: 0,
    },
  },
};
