/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pixel_ship.jpg";

const imageAltText = "Pixel art of a wooden ship on the sea.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Backend fake news project 📰",
    description:
      "Made as part of a project to learn about backend development. This project was built with Javascript, node.js and express.",
    url: "https://github.com/aswain03/be-nc-news",
  },
  {
    title: "Remember Paint? 🎨",
    description:
      "Simple Paint app recreated using c# and winforms. This was a fun project to work on and I learned a lot about the basics of GUI development.",
    url: "https://github.com/aswain03/paintApp",
  },
  {
    title: "DevCake web app 🍰",
    description:
      "A web app that was built as part of a hackathon. The app is designed to help developers find their dream job. Built using Typescript, mongoDB and Tailwind CSS.",
    url: "https://github.com/aswain03/proj-dev-cake",
  },
  {
    title: "Snowrider 🏂",
    description:
      "First game I built using Unity. This was a great to learn the basics of game development and C#.",
    url: "https://digitalmariner.itch.io/snowrider-v1",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;