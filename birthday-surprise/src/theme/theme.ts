import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff69b4",
    },
    secondary: {
      main: "#d8b4fe",
    },
    background: {
      default: "#0f172a",
      paper: "rgba(255,255,255,.1)",
    },
  },

  shape: {
    borderRadius: 20,
  },

  typography: {
    fontFamily: "Poppins",
  },
});