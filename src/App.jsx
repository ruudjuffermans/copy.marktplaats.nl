import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "router";
import { LOGIN_USER } from "state/userSlice";

import GlobalStyles from "styles/GlobalStyles";
import Helmet from "styles/Helmet";

import { getTheme } from "utils/getTheme";
import useTheme from "utils/useTheme";

import "styles/slick.css";
import "styles/style.css";
import "styles/icons.css";

function App() {
  const [themeColor, toggleTheme] = useTheme();

  const dispatch = useDispatch();
  useEffect(() => {
    const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
    if (user) {
      console.log(user);
      dispatch(LOGIN_USER(user));
    }
  }, []);

  if (!themeColor) return null;

  return (
    <>
      <GlobalStyles />
      <Helmet />
      {/* <a onClick={() => toggleTheme()}>click me</a> */}
      <ThemeProvider theme={getTheme(themeColor)}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
