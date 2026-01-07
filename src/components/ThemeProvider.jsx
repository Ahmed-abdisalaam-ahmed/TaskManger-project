import React, { createContext, useContext, useState } from "react";

const themeConetxt = createContext(initialState);

const initialState = {
    
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  return (
    <ThemeProvider value={{ theme, setTheme }}>
     {children}
    </ThemeProvider>);
};

export const useTheme = () => {
  const context = useContext(themeConetxt);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
