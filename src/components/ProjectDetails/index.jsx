import './style.css';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineOpenInNew } from 'react-icons/md';

function index(props) {
  const { project } = props;

  if (project === null) {
    /*La opcion seria recuperar el alto de un proyecto, lo que ocupa o hacer un skeleton para que luego se muestre correctamente al scrolear*/
    return <div className='separator '><p  id='actual_project'>Select one Porject</p></div> ;
  }

  return (
    <div key={project.id} id='actual_project' className='project-container'>
      <header className='title-container'>
        <h4 className='color-orange'>{project.id}.</h4>
        <h3>{project.title}</h3>
        <div className='line'></div>
      </header>
      <main className='main-container'>
        <section className='left-container'>
          <a target={'_blank'} href={project.demo}>
            <img
              width={'250px'}
              height={'250px'}
              src={project.preview_img}
              alt={`${project.title} logo`}
            />
          </a>
        </section>
        <section className='right-container'>
          <header>
            <h5 className='color-orange'>{project.type}</h5>
            <h4>{project.subTitle}</h4>
          </header>
          <p className='description'>{project.description}</p>
          <ul className={'list-container'}>
            {project.techStack.map((teach, index) => {
              return <li key={index} className={'list-item'}>{teach}</li>;
            })}
          </ul>

          <div className='links-container'>
            <a target={'_blank'} href={project.github.client}>
              <BsGithub />
            </a>
            <a target={'_blank'} href={project.demo}>
              <MdOutlineOpenInNew />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default index;
