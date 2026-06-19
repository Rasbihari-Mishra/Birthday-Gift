import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "./theme/theme";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
  <CssBaseline />
  <BrowserRouter>
    <App />
  </BrowserRouter>
</ThemeProvider>
);