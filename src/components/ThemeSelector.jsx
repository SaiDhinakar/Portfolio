import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeSelector = () => {
  const { currentTheme, theme, isDarkMode, changeTheme, toggleDarkMode, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeIcons = {
    ocean: '🌊',
    matrix: '💚',
    fluorescent: '💜',
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-2">
        {/* Dark/Light Mode Toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleDarkMode}
          className={`p-3 rounded-full ${theme.surface} ${theme.border} border backdrop-blur-sm`}
        >
          {isDarkMode ? (
            <Sun className={`w-5 h-5 ${theme.accent}`} />
          ) : (
            <Moon className={`w-5 h-5 ${theme.accent}`} />
          )}
        </motion.button>

        {/* Theme Selector */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`p-3 rounded-full ${theme.surface} ${theme.border} border backdrop-blur-sm flex items-center gap-2`}
          >
            <Palette className={`w-5 h-5 ${theme.accent}`} />
            <span className="text-lg">{themeIcons[currentTheme]}</span>
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                className={`absolute top-full right-0 mt-2 ${theme.surface} ${theme.border} border rounded-lg p-2 backdrop-blur-sm min-w-[200px]`}
              >
                <div className={`text-sm ${theme.textSecondary} px-3 py-2 border-b ${theme.border}`}>
                  Choose Theme
                </div>
                {themes.map((themeName) => (
                  <motion.button
                    key={themeName}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      changeTheme(themeName);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left p-3 rounded-md transition-colors flex items-center gap-3 ${
                      currentTheme === themeName
                        ? `${theme.button} ${theme.text}`
                        : `hover:${theme.surface} ${theme.text}`
                    }`}
                  >
                    <span className="text-xl">{themeIcons[themeName]}</span>
                    <span className="capitalize">{themeName}</span>
                    {currentTheme === themeName && (
                      <span className={`ml-auto ${theme.accent}`}>✓</span>
                    )}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
