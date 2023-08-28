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
import ReactGA from "react-ga4";

import * as serviceWorker from "./serviceWorker";

//import components
import Navbar from "./components/navbar.jsx";
import Intro from "./components/intro.jsx";
import Aboutme from "./components/aboutme.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
import Storage from "./components/storage.jsx";
import Career from "./components/career.jsx";
import Footer from "./components/footer";

import BackToTop from "./components/back-top.jsx";
import Preloader from "./components/preloader";

import { createTheme, ThemeProvider } from "@mui/material";

const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;

ReactGA.initialize(TRACKING_ID);
ReactGA.set({ page: window.location.pathname });
ReactGA.send("pageview");

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
      <Storage />
      <Career />
      <Footer />
      <BackToTop />
      <Preloader />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
