import $ from "jquery";
import React from "react";

import { IoLogoReact } from "react-icons/io5";

class Navbar extends React.Component {
  componentDidMount() {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function () {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight,
    });

    $(".js-scroll").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document.querySelector(".navbar-expand-md").classList.add("navbar-reduce");
        document.querySelector(".navbar-expand-md").classList.remove("navbar-trans");
        this.setState({});
      } else {
        document.querySelector(".navbar-expand-md").classList.add("navbar-trans");
        document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce");
        this.setState({});
      }
    });

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
      if (
        window.location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5,
            },
            1000,
            "easeInExpo"
          );
          return false;
        }
      }
    });

    $(".js-scroll").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });
  }

  render() {
    return (
      <nav className='navbar navbar-b navbar-trans navbar-expand-md fixed-top' id='mainNav'>
        <div className='container'>
          <a className='navbar-brand js-scroll' href='#page-top'>
            <IoLogoReact size={35} style={{ marginRight: 7 }} color='5ac9f1' />
            JSH's Portfolio
          </a>
          <button
            className='navbar-toggler collapsed'
            type='button'
            data-toggle='collapse'
            data-target='#navbarDefault'
            aria-controls='navbarDefault'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className='navbar-collapse collapse justify-content-end' id='navbarDefault'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link js-scroll active' href='#intro'>
                  Intro
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link js-scroll' href='#aboutme'>
                  About me
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link js-scroll' href='#skills'>
                  Skills
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link js-scroll' href='#projects'>
                  Projects
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link js-scroll' href='#storage'>
                  Storage
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link js-scroll' href='#career'>
                  Career
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
