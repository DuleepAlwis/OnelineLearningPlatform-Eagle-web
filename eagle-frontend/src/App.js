import logo from './logo.svg';
import Routers from './Routers';
import './App.css';
import client from "./SBAppolloClient";
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './css/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>

    <ApolloProvider client={client}>
      <div className="App">
        <Routers/>
      </div>
    </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
