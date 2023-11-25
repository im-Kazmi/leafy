"use client";
import {
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IThemeContext {
  theme: string | undefined;
  setTheme: (theme: string) => void;
  handleThemeChange: () => void | undefined;
}
const themeContext = createContext<IThemeContext | undefined>(undefined);
const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const defaultTheme =
      (localStorage.getItem("theme") &&
        JSON.parse(localStorage.getItem("theme") as string)) ||
      "light";
    document.documentElement.classList.add(defaultTheme);
  }, []);
  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return (
    <themeContext.Provider value={{ theme, setTheme, handleThemeChange }}>
      {children}
    </themeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(themeContext);
};
export default ThemeContextProvider;
