import React from "react";
import "./index.css";
import folderIcon from "../../assets/icons/folder-open-regular.svg";
import timeIcon from "../../assets/icons/timeline-solid.svg";
import locationIcon from "../../assets/icons/map-location-dot-solid.svg";
import reactIcon from "../../assets/icons/react.svg";
import viteIcon from "../../assets/icons/vitejs.svg";
import expressIcon from "../../assets/icons/icons8-express-js.svg";

import htmlIcon from "../../assets/icons/icons8-html-5.svg";
import css3Icon from "../../assets/icons/icons8-css3.svg";
import mongodbIcon from "../../assets/icons/mongodbIcon.svg";
import figmaIcon from "../../assets/icons/icons8-figma.svg";
import tailwindIcon from "../../assets/icons/icons8-tailwind-css.svg";
import gitIcon from "../../assets/icons/icons8-git.svg";
import githubIcon from "../../assets/icons/github.svg";
import hbsIcon from "../../assets/icons/hbsIcon.svg";
import boostrapIcon from "../../assets/icons/boostrap.svg";
import nodeIcon from "../../assets/icons/icons8-nodejs.svg";
import { Timeline } from "../../components/timeline";

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
              <span className="special-text">Hi,</span> "I am a passionate web
              developer with experience in creating interactive and modern
              websites that aim to provide an engaging user experience. I am
              always seeking new challenges and opportunities to learn and
              improve my technical skills. I believe in the power of
              collaboration and communication to achieve successful projects,
              and I am committed to delivering innovative and customized
              solutions for each client."
            </p>

            <q>
              Programming is a form of thinking, not just a form of writing code
            </q>
            <p>
              <em>~Chris Granger.</em>
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

        <Timeline />
      </div>

      <div id="technologies-section">
        <div className="title">
          <div className="line"></div>
          <h1>technologies</h1>
          <div className="line"></div>
        </div>

        <div className="resume-container">
          <div className="resume-card">
            <img className="icon" src={reactIcon} />
            <h4>React.js</h4>
          </div>

          <div className="resume-card">
            <img className="icon" src={viteIcon} />
            <h4>Vite</h4>
          </div>

          <div className="resume-card">
            <img className="icon" src={expressIcon} />
            <h4>Express</h4>
          </div>

          <div className="resume-card">
            <img className="icon" src={gitIcon} />
            <h4>Git</h4>
          </div>

          <div className="resume-card">
            <img className="icon bg-white border-circle" src={githubIcon} />
            <h4>Github</h4>
          </div>

          <div className="resume-card">
            <img className="icon" src={mongodbIcon} />
            <h4>MongoDB</h4>
          </div>

          <div className="resume-card">
            <img className="icon bg-white border-circle" src={hbsIcon} />
            <h4>Handlebars</h4>
          </div>

          <div className="resume-card">
            <img className="icon" src={figmaIcon} />
            <h4>Figma</h4>
          </div>

          <div className="resume-card">
            <img className="icon bg-white border-circle" src={nodeIcon} />
            <h4>Node</h4>
          </div>
          <div className="resume-card">
            <img className="icon" src={htmlIcon} />
            <h4>HTML</h4>
          </div>
          <div className="resume-card">
            <img className="icon" src={css3Icon} />
            <h4>CSS3</h4>
          </div>
          <div className="resume-card">
            <img className="icon" src={tailwindIcon} />
            <h4>TailwindCss</h4>
          </div>
          <div className="resume-card">
            <img className="icon" src={boostrapIcon} />
            <h4>Boostrap</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export { About };
