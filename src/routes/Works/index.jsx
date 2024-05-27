import { useState } from 'react';
import './index.css';
import projects from '../../data/projects.js';
import Hexagono from '../../components/Hexagono';
import ProjectDetails from '../../components/ProjectDetails';

function Works() {
  const [projectSelected, setProjectSelect] = useState(null);

  const handleSelectedProject = (projectData) => {
    setProjectSelect(projectData);
    document.getElementById('actual_project').scrollIntoView()
  };

  return (
    <div id='works' className='container'>
      <div className='title'>
        <div className='line'></div>
        <h1>Portafolio</h1>
        <div className='line'></div>
      </div>

      <div className='cards-container'>
        {projects.map((project) => {
          return (
            <button
              onClick={() => handleSelectedProject(project)}
              style={{ border: 'none', backgroundColor: 'transparent' }}
              key={project.id}
              className='card'
            >
              <Hexagono titulo={project.title} coverImg={project.preview_img} />
            </button>
          );
        })}
      </div>
      <ProjectDetails project={projectSelected} />
    </div>
  );
}

export { Works };
