import './style.css';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineOpenInNew } from 'react-icons/md';


function index(props) {
  const { project } = props;

  if (project === null) {
    return 'Select one Porject';
  }

  return (
    <div className='project-container'>
      <header className='title-container'>
      <h4 className='color-orange'>{project.id}.</h4>
        <h3>{project.title}</h3>
        <div className='line'></div>
      </header>
      <main className='main-container'>
        <section className='left-container'>
          <img width={"250px"} height={"250px"} src={project.preview_img} alt={`${project.title} logo`}/>
        </section>
        <section className='right-container'>
          <h3 className='color-orange'>{project.type}</h3>
          <h3>{project.subTitle}</h3>
          <p className='description'>{project.description}</p>
          <ul className={"list-container"}>{project.techStack.map(teach => {
            return (
              <li className={"list-item"}>{teach}</li>
            )
          })}</ul>

          <div className='links-container'>
            <a target={"_blank"} href={project.github.client}><BsGithub /></a>
            <a target={"_blank"} href={project.demo}><MdOutlineOpenInNew/></a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default index;
