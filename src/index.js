import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Theme } from "./theme";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <App />

    </ThemeProvider>
  </React.StrictMode>

);