import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check local storage or system preference
    const saved = localStorage.getItem('theme') as Theme;
    if (saved === 'light' || saved === 'dark') return saved;
    
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPreference ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme, setTheme };
}
