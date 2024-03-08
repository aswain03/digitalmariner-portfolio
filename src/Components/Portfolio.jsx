import React from "react";

import image from "../images/pixel_ship.jpg";

const imageAltText = "Pixel art of a wooden ship on the sea.";


const projectList = [
  {
    title: "Backend fake news project 📰",
    description:
      "Made as part of a project to learn about backend development. This project was built with Javascript, node.js and express.",
    url: "https://github.com/aswain03/be-nc-news",
  },
  {
    title: "Is it online? 🌐",
    description:
      "A simple terminal app built with python using the requests library. This app checks if a website is online.",
    url: "https://github.com/aswain03/is_it_online",
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
  {
    title: "This website! 💻",
    description: "Constantly being updated and improved! Built using React and hosted on Azure.",
    url: "https://github.com/aswain03/digitalmariner-portfolio",
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
