import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const initialValue = JSON.parse(localStorage.getItem("theme")) || "light";
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    console.log(theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log(theme);
    if (theme == "dark") {
      localStorage.setItem("theme", JSON.stringify("light"));
      setTheme("light");
    } else if (theme == "light") {
      localStorage.setItem("theme", JSON.stringify("dark"));
      setTheme("dark");
    } else {
      alert("ilu");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
