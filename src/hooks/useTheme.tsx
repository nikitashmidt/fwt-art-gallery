import { createContext, useContext, useState, useMemo } from 'react';

interface IAppContext {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const getTheme: boolean = localStorage.getItem('isDark') === 'true';

const ThemeContext = createContext<IAppContext>({
  isDark: getTheme,
  setIsDark: (isDark) => !isDark,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(getTheme);

  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  localStorage.setItem('isDark', isDark ? 'true' : 'false');

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => {
  const value = useContext(ThemeContext);
  return value;
};

export default useTheme;
