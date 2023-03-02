import Header from './components/Header';
import { ThemeProvider } from './hooks/useTheme';
import Layout from './components/Layout/Layout';
import Content from './components/Content';
import Footer from './components/Footer';
import './index.scss';

function App() {
  return (
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
}

export default App;
