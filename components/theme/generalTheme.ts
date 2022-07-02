import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3836bf',
    },
    secondary: {
      main: '#fc5185',
      light: '#fdb4cb',
      dark: '#e0044a',
    },
    info: {
      main: '#3fc1c9',
      light: '#8Bdade',
      dark: '#22767b',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#dbdbdb',
    },
  },
  typography: {
    fontFamily: ['Helvetica Neue', 'Arial', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', 'sans-serif'].join(
      ',',
    ),
  },
});

const generalTheme = responsiveFontSizes(theme);

export default generalTheme;
