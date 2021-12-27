import React from "react";
import Phone from "./images/phone.jpg";
import Person from "./images/person.jpg";
import Contact from "./Contact";
import "./Features.css";

const Features = () => {
  return (
    <>
      <section className="features">
        <div className="container">
          <ul className="feature-list">
            <li>Dummy text</li>
            <li>Dummy text</li>
            <li>Dummy text</li>
            <li>Dummy text</li>
            <li>Dummy text</li>
            <li>Dummy text</li>
            <li>Dummy text</li>
          </ul>
          <img src={Phone} alt="Person holding phone" />
        </div>
      </section>
      <section className="testimonials-section">
        <div className="container">
          <ul>
            <li>
              <img src={Person} alt="Person image" />
              <blockquote>
                " Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maxime praesentium, neque dolor consequatur id error. Provident
                eos magnam inventore? Temporibus"
              </blockquote>
              <cite>- John Doe</cite>
            </li>
            <li>
              <img src={Person} alt="Person image" />
              <blockquote>
                " Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maxime praesentium, neque dolor consequatur id error. Provident
                eos magnam inventore? Temporibus"
              </blockquote>
              <cite>- John Doe</cite>
            </li>
            <li>
              <img src={Person} alt="Person image" />
              <blockquote>
                " Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maxime praesentium, neque dolor consequatur id error. Provident
                eos magnam inventore? Temporibus"
              </blockquote>
              <cite>- John Doe</cite>
            </li>
          </ul>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Features;
