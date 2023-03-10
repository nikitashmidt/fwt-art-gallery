import Layout from './components/Layout';
import { ThemeProvider } from './hooks/useTheme';

const App = () => (
  <ThemeProvider>
    <Layout />
  </ThemeProvider>
);

export default App;
