import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './Data/store';
import { Provider } from 'react-redux';

import { MuiThemeProvider } from '@material-ui/core/styles';

import { theme } from './Theme/index.jsx';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
