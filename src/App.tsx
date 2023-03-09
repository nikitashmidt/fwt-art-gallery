import { ThemeProvider } from './hooks/useTheme';
import Header from './components/Header';
import Layout from './components/Layout/Layout';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => (
  <ThemeProvider>
    <Layout>
      <div className='app'>
        <Header />
        <main>
          <Content />
        </main>
        <Footer />
      </div>
    </Layout>
  </ThemeProvider>
);

export default App;
