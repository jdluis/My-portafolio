import React from 'react';
import './index.css';

const Timeline = () => {
  React.useEffect(() => {
    let items = document.querySelectorAll('li');

    const isItemInView = (item) => {
      let rect = item.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const callbackFunc = () => {
      for (let i = 0; i < items.length; i++) {
        if (isItemInView(items[i])) {
          items[i].classList.add('show');
        } else {
          items[i].classList.remove('show');
        }
      }
    };
    // listen for events
    window.addEventListener('load', callbackFunc);
    window.addEventListener('resize', callbackFunc);
    window.addEventListener('scroll', callbackFunc);
  }, []);

  return (
    <div id='timeline'>
      <ul>
        <li>
          <div>
            <time>2019</time>
            <p>
              I start to consider my current professional future and decide to make a change while continuing to study aerospace mechanics and work. Due to my passion for computers, I decide to investigate the programming field more seriously.
            </p>
          </div>
        </li>
        <li>
          <div>
            <time>2020</time>
            <p>
              This year, I have already decided to start programming with web development technologies first and I complete a semester of higher vocational training in multiplatform web app development, where I receive a scholarship to enhance my opportunities in the industry.
            </p>
            <p>
              I decide to leave the vocational training and, unfortunately, the Domingo Alonso scholarship as well. One of the reasons was the inability of Education to adapt to new technologies, which were outdated and often resulted in wasting a lot of time. That's why I continue as a self-taught learner.
            </p>
          </div>
        </li>
        <li>
          <div>
            <time>2021</time>
            <p>
              With a clear idea and fully focused on my new professional career, I dive into the world of web pages, tutorials on JavaScript in Udemy, tutorials on advanced CSS and libraries on YouTube. I begin to connect with digital nomads who are already in the position I aspire to be and they advise me on which path to choose. I discover Tailwind CSS and create applications using vanilla JavaScript.

              This year, I open  <a className='links' href="https://github.com/jdluis">my GitHub account</a>.
            </p>
          </div>
        </li>
        <li>
          <div>
            <time>2022</time>
            <p>
              I continued my studies, completing various certifications on platforms like CoderHouse, Platzi, Telefonica, etc., focused on web development for the frontend and agile methodologies.
            </p>
            <p>
              It's the year when I managed to find my first job through LinkedIn <a className='links' href="https://www.linkedin.com/company/symbyosys/">Symbyosys</a> (IT Services and IT Consulting) as a web developer, which was a very important personal and professional step for me. In September, I stopped working for that company and decided to keep learning, enrolling in a bootcamp at the beginning of next year.
            </p>
          </div>
        </li>
        <li>
          <div>
            <time>2023</time>
            <p>
              I'm starting my Bootcamp at <a className='links' href="https://www.ironhack.com/es/en/web-development/remote">Ironhack</a>, specializing in MERN technologies (MongoDB, Express, React, and Node). During the program, I completed a project focused on Object-Oriented Programming (OOP) and two projects focused on FullStack applications, as well as numerous intensive exercises for 2 months.
            </p>
          </div>
        </li>
        <li>
          <div>
            <time>Actualidad</time>
            <p>
              I am constantly learning new technologies and updating the ones I already know, in addition to creating a project that allows me to learn while practicing. The technologies I am focused on are: TypeScript, Nest.js, Jest, and other testing libraries...
              <br /> <br />
              In July, I start working at <a className='links' href="https://www.linkedin.com/company/the-wise-dreams/mycompany/">The Wise Dreams</a> , a technology company that utilizes AI and virtual reality, with roles as a web developer and Microsoft support, as well as managing some projects.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export { Timeline };
