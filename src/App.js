import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import GlobalStyle from './commons/styles/global-style';
import Main from './containers/Main';
import CovidApiProvider from './services/provider';

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <CovidApiProvider>
        <Main />
      </CovidApiProvider>
    </StylesProvider>
  );
};

export default App;
