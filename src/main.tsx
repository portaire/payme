import GlobalStylesheet from '@styles/globals';
import theme from '@styles/theme';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStylesheet />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
