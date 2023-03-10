import Layout from './components/Layout';
import Content from './components/Content';
import { ThemeProvider } from './hooks/useTheme';

const App = () => (
  <ThemeProvider>
    <Layout>
      <Content />
    </Layout>
  </ThemeProvider>
);

export default App;
