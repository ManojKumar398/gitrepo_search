import { ThemeProvider } from 'styled-components';
import './App.css';
import Home from './components/Home';
import { GlobalStyle } from './GlobalStyle';
function App() {
  const theme = {
    colors: {
      bg: "#ECECEC",
      black: " #212529"
    },
    media: { mobile: '900px' }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>

  );
}

export default App;
