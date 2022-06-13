import React from 'react';
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import GlobalStyles from './globalStyles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

    </ThemeProvider>
  );
}

export default App;
