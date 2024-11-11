import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const initialValue = JSON.parse(localStorage.getItem("theme"));
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialValue);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", initialValue);
  }, []);

  const toggleTheme = (newTheme) => {
    if (newTheme == "dark") {
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
    } else if (newTheme == "light") {
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
    } else {
      alert("ilu");
    }
  };
  return (
    <ThemeContextProvider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextProvider>
  );
};
