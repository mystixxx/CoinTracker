import React, { useEffect } from "react";
import "./Hero.scss";
import AOS from 'aos';
import 'aos/dist/aos.css'
import sneakerImage from "../../assets/graph.svg";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  })

  return (
    <div className="hero" id="heroSection">
      <div className="container">
        <div className="content">
          <div className="col-1" data-aos="fade-right">
            <h1>
              Today's <span className="coloring">Cryptocurrency</span>
              <br></br> Prices by Coin Tracker
            </h1>
            <p>
              Coin tracker lets you check the latest price of top hundred
              <br></br> crypto currency coins.
            </p>
          </div>
          <div className="col-2" data-aos="fade-left">
            <img alt="graph" src={sneakerImage} className="graph" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
