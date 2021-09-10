import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@material-ui/core';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import NavBar from '@components/NavBar';
import Routes from './Routes';
import theme from './theme';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={ theme }>
      <Router>
        <CssBaseline>
          <NavBar />
          <Container maxWidth="xl">
            <Routes/>
          </Container>
        </CssBaseline>
      </Router>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root'),
);
