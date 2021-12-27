import React from "react";
import Watch from "./images/watch.svg";
import Graph from "./images/illustration.svg";
import Features from "./Features";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="left-col">
            <p className="sub-head">Don't do anything</p>
            <h1>An app that doesn't do much</h1>
            <div className="hero-cta">
              <a href="#" className="primary-cta">
                Try for Now
              </a>
              <br />
              <a
                href="https://www.youtube.com"
                target="_blank"
                className="video-cta"
              >
                <div className="watch-cta">
                  <img src={Watch} alt="Watch video" />
                  Watch here
                </div>
              </a>
            </div>
          </div>
          <img className="hero-image" src={Graph} alt="Hero Image" />
        </div>
      </section>
      <Features />
    </>
  );
};

export default Hero;
