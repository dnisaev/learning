import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyles} from "./styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {mainTheme} from "./styles/Theme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={mainTheme}>
    <App />
    <GlobalStyles/>
  </ThemeProvider>
);

reportWebVitals();
