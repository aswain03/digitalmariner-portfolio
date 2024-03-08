import React, { useState, useEffect } from "react";

import image from "../images/sunset-pixel-scenery-mountain.jpg";

const imageAltText = "Pixel art of a sunset over a mountain range.";

const description =
  "I'm a Full stack engineer. Former Leading Hand in the Royal Navy. Studying Computer Science part time with the Open University. Data Engineer at Northcoders.";

const skillsList = [
  "Python",
  "Cloud computing",
  "Data engineering",
  "Backend development",
  "Test driven development",
  "Game development",
];

const detailOrQuote =
  "I am passionate about solving problems, incredibly curious and a strong believer in the power of the community, I am always looking to give back. Coding. Hiking. Cooking. Gardening. Modest. Moustache.";

const About = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: windowWidth <= 800 ? 1 : 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
