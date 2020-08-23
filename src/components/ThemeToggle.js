import React, {useEffect, useState} from "react";
import {Brightness5, Brightness6, Brightness7} from '@material-ui/icons';

const themeOption = {
  "DARK": "dark",
  "LIGHT": "light",
  "SYSTEM": "system",
};

const themeIcon = {
  [themeOption.DARK]: <Brightness7/>,
  [themeOption.LIGHT]: <Brightness5/>,
  [null]: <Brightness6/>,
};

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme !== null && theme !== "null") {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.setAttribute("data-theme",
        window.matchMedia('(prefers-color-scheme: light)').matches
          ? themeOption.LIGHT
          : themeOption.DARK
      )
    }
  }, [theme])

  const toggleTheme = () => {
    switch (theme) {
      case themeOption.DARK: {
        setTheme(themeOption.LIGHT);
        break;
      }
      case themeOption.LIGHT: {
        setTheme(null);
        break;
      }
      default: {
        setTheme(themeOption.DARK);
      }
    }
  }

  return (
    <span onClick={toggleTheme}>{themeIcon[theme]}</span>
  );
};
