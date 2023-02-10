import { createTheme } from "@mui/material/styles";

export const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#7454FB",
    },
    secondary: {
      main: "#0A9AFF",
    },
    background: {
      default: "#F2EEEE",
    },
  },
  typography: {
    fontFamily: "Lato",
    fontSize: 16,
    h1: {
      fontSize: 32,
    },
    h2: {
      fontSize: 26,
    },
    h3: {
      fontSize: 22,
    },
    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 13.3,
    },
    h6: {
      fontSize: 10.7,
    },
  },
};

export const lightTheme = createTheme(themeOptions);
