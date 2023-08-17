import React from "react";
import ReactDOM from "react-dom";

//import css in order
import "normalize.css";
import "./animate.css";
import "bootstrap/dist/css/bootstrap.css";
import "./img/icons/css/ionicons.css";
import "./img/font-awesome/css/font-awesome.css";
import "lightbox2/dist/css/lightbox.min.css";
import "./style.css";
import "animate.css";

//import js libraries
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./libs/easing.js";
import "lightbox2/dist/js/lightbox.min.js";

import * as serviceWorker from "./serviceWorker";

//import components
import Navbar from "./components/navbar.jsx";
import Intro from "./components/intro.jsx";
import Aboutme from "./components/aboutme.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
import Footer from "./components/footer";

import BackToTop from "./components/back-top.jsx";
import Preloader from "./components/preloader";

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Pretendard",
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Navbar />
      <Intro />
      <Aboutme />
      <Skills />
      <Projects />
      <Footer />
      <BackToTop />
      <Preloader />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
