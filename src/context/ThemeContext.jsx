import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const themes = {
  ocean: {
    name: 'Ocean Blue',
    primary: 'from-blue-600 to-cyan-600',
    background: 'bg-slate-900',
    surface: 'bg-slate-800',
    text: 'text-slate-100',
    textSecondary: 'text-slate-300',
    accent: 'text-cyan-400',
    border: 'border-slate-700',
    button: 'bg-blue-600 hover:bg-blue-700',
    card: 'bg-slate-800/50 backdrop-blur-sm',
    gradient: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
  },
  matrix: {
    name: 'Matrix Green',
    primary: 'from-green-500 to-emerald-500',
    background: 'bg-black',
    surface: 'bg-gray-900',
    text: 'text-green-400',
    textSecondary: 'text-green-300',
    accent: 'text-green-500',
    border: 'border-green-500',
    button: 'bg-green-600 hover:bg-green-700',
    card: 'bg-gray-900/80 backdrop-blur-sm border border-green-500/20',
    gradient: 'bg-gradient-to-br from-black via-gray-900 to-black',
  },
  fluorescent: {
    name: 'Fluorescent',
    primary: 'from-purple-500 to-pink-500',
    background: 'bg-gray-900',
    surface: 'bg-gray-800',
    text: 'text-purple-100',
    textSecondary: 'text-purple-200',
    accent: 'text-pink-400',
    border: 'border-purple-500',
    button: 'bg-purple-600 hover:bg-purple-700',
    card: 'bg-gray-800/60 backdrop-blur-sm border border-purple-500/20',
    gradient: 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900',
  },
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('ocean');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const savedDarkMode = localStorage.getItem('portfolio-dark-mode');
    
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
    
    if (savedDarkMode !== null) {
      setIsDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem('portfolio-theme', themeName);
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('portfolio-dark-mode', JSON.stringify(newDarkMode));
  };

  const theme = themes[currentTheme];

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      theme,
      isDarkMode,
      changeTheme,
      toggleDarkMode,
      themes: Object.keys(themes),
    }}>
      {children}
    </ThemeContext.Provider>
  );
};
