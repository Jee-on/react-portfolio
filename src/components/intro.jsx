import React from "react";
import "./stars.scss";

import Typed from "react-typed";
import { Button } from "@mui/material";
import { FaAngleDoubleDown } from "react-icons/fa";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id='intro' className='intro route bg-image background'>
        <div id='stars' />
        <div id='stars2' />
        <div id='stars3' />

        <div className='intro-content display-table'>
          <div className='table-cell'>
            <div className='container'>
              <h2 className='intro-title mb-4'> 전성호 </h2>
              <h3 className='intro-title2 mb-4'> 웹 개발자 포트폴리오 </h3>
              <p className='intro-subtitle'>
                <span className='text-slider-items'></span>
                <strong className='text-slider'>
                  <Typed
                    strings={["Front end Developer", "Back end Developer"]}
                    typeSpeed={60}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className='pt-3'>
                <a
                  className='btn btn-primary btn js-scroll px-3'
                  href='#aboutme'
                  role='button'
                  style={{ fontSize: "1.2rem", fontFamily: "Pretendard" }}>
                  더 알아보기 <FaAngleDoubleDown />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
