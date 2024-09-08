

import React, { useContext } from "react";
import ThemeProvider from './components/ThemeProvider'
import ThemeContext from "./components/ThemeContext";
import './App5.css'

function App5() {
  const { theme, setTheme } = useContext(ThemeContext);

  // Toggle function
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`container ${theme}`}>
    <p className="theme-text">The current theme is {theme}</p>
    <button onClick={toggleTheme} className="toggle-button">
      Toggle Theme
    </button>
  </div>
  ); 
}

export default function App() {
  return (
    <ThemeProvider>
      <App5 />
    </ThemeProvider>
  );
}
