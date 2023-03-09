import { createContext, useContext, useState, useMemo } from 'react';

interface IAppContext {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const theme = localStorage.getItem('isDark') as string;

const getTheme = JSON.parse(theme) as boolean;

const ThemeContext = createContext<IAppContext>({
  isDark: getTheme,
  setIsDark: (isDark) => !isDark,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(getTheme);

  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  localStorage.setItem('isDark', String(isDark));

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export default useTheme;
