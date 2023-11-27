import { createContext } from "react";
export const ThemeContext = createContext();
export const Themes = {
  dark: "dark",
  light: "light",
};
export const initialState = Themes.Clear;
