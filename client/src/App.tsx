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
import HomePage from './components/views/HomePage/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
 
    </ThemeProvider>
  );
}

export default App;
