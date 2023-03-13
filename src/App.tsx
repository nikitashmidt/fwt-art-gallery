import { Provider } from 'react-redux';

import Layout from '@components/Layout';
import Content from '@components/Content';
import { ThemeProvider } from '@/hooks/useTheme';
import store from '@/store';

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <Layout>
        <Content />
      </Layout>
    </ThemeProvider>
  </Provider>
);

export default App;
