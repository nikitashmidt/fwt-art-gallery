import { createContext, useContext, useState, useMemo } from 'react';
import { useCookies } from 'react-cookie';

interface IAppContext {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

let examination: boolean;
if (document.cookie === 'Theme=Dark') {
  examination = true;
} else {
  examination = false;
}

const ThemeContext = createContext<IAppContext>({
  isDark: examination,
  setIsDark: (isDark) => !isDark,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(examination);
  const [cookies, setCookies] = useCookies<string>(['Theme']);

  const date = Date.parse(new Date(Date.now() + 123886400e3).toISOString());

  if (isDark) {
    setCookies('Theme', 'Dark', { path: '/', maxAge: date });
  } else {
    setCookies('Theme', 'Light', { path: '/', maxAge: date });
  }

  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => {
  const value = useContext(ThemeContext);
  return value;
};

export default useTheme;
