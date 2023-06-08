import './scss/app.scss';
import Router from './router/router';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './constant';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
