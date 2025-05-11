import React, { createContext, useState, useEffect } from "react";

// Create a context to manage the theme
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("theme1"); // Default theme

  // Listen for 'Alt + Q' keypress to toggle theme
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.altKey && event.key === "q") {
        setCurrentTheme((prev) => {
          if (prev === "theme1") return "theme2";
          if (prev === "theme2") return "theme3";
          return "theme1"; // Cycle back to the first theme
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress); // Clean up the event listener
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
