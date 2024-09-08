import { useContext, useEffect, useState } from "react";
import ThemeContext from "./componentts/ThemeContext";
import ThemeProvider from "./componentts/ThemeProvider";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const themeToggler = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      {theme}
      <div className="w-40 border-5 h-40 dark:bg-gray-800 dark:border-gray-100"></div>
      <button className="bg-blue-300" onClick={themeToggler}>
        click me
      </button>
    </>
  );
}

export default function App2() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
