import React from "react";
import "./index.css";
import folderIcon from "../../assets/icons/folder-open-regular.svg";
import timeIcon from "../../assets/icons/folder-open-regular.svg";
import locationIcon from "../../assets/icons/timeline-solid.svg";

function About() {
  return (
    <div id="about" className="container">
      <div id="introduction-section">
        <div className="title">
          <div className="line"></div>
          <h1>About Me</h1>
          <div className="line"></div>
        </div>

        <div className="content">
          <div className="text-container">
            <p>
              <span className="special-text">SM</span> was founded in the year
              of 2022 as a studio in Tehran, Iran. Our vision is focused on
              quality and details and ultimately, turning your ideas into a
              high-end product. Our workflow is that we design a website /
              application according to your needs and story and then develop it
              into something bigger. There are no limits at SM studio, we turn
              your imagination into reality; we create your ideas into a
              powerful and meaningful digital experience.
            </p>

            <q>
              The world of reality has its limits; the world of imagination is
              boundless.
            </q>
            <p>
              <em>~Jean-Jacques Rousseau</em>
            </p>
          </div>

          <div className="resume-container">
            <div className="resume-card">
              <img className="icon" src={folderIcon} />
              <h4>Repositorys</h4>
              <p>44</p>
            </div>

            <div className="resume-card">
              <img className="icon" src={folderIcon} />
              <h4>Since</h4>
              <p>2019</p>
            </div>

            <div className="resume-card">
              <img className="icon" src={locationIcon} />
              <h4>Location</h4>
              <p>Canary Island, Spain</p>
            </div>
          </div>
        </div>
      </div>

      <div id="About-top">
        <div className="title">
          <div className="line"></div>
          <h1>Experience</h1>
          <div className="line"></div>
        </div>
      </div>

      <div id="technologies-section">
        <div className="title">
          <div className="line"></div>
          <h1>technologies</h1>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

export { About };
