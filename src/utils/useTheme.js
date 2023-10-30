import React, { useEffect, useState } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState(null);

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  const selectTheme = () => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    const prefferedTheme = localStorage.getItem("theme");

    if (prefferedTheme) {
      setTheme(prefferedTheme);
      return;
    }

    const pcs = window.matchMedia("(prefers-color-scheme)");

    if (pcs.media !== "(prefers-color-scheme)") {
      setTheme("light");
      return;
    }

    selectTheme();

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", selectTheme);
  }, []);

  return [theme, toggleTheme];
};

export default useTheme;
