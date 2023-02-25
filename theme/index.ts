import { createTheme } from '@mui/material/styles';

import * as components from './components';
import typography from './typography';

const theme = createTheme({
  palette: {
    primary: {
      main: '#123B7B',
    },
    secondary: { main: '#F0A939', dark: '#FFC46B', light: '#FFF3E0' },
    success: { main: '#29B46A', light: '#E7FFF2' },
    warning: { main: '#F3CD68', light: '#FFF7E3' },
    error: { main: '#FF3F3C', dark: '#B2120F', light: '#FFF0EF' },
  },
  typography: typography,
  components: { ...components },
});

export default theme;
