import React from "react";
import "./About.css"
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import { MdCastForEducation} from 'react-icons/md';
import { FaReact} from 'react-icons/fa';
import { MdModelTraining} from 'react-icons/md'


const About = () => {
  const url = "https://res.cloudinary.com/dkvqwonfx/image/upload/v1673684240/2081A376-DCF7-4F0D-A9ED-DA9A9BE679C6_lhbwvl.jpg"
  return (
    <>

      <section id="about">
        <h5>Get To Konow </h5>
        <h2>About Me</h2>
        <div className='container about__container'>

          <div className='about__me'>

            <div className='about__me-image'>

              <img src={url} alt="loading" />

            </div>
          </div>
          <div className='about__content'>

            <div className='about__cards'>

              <article className='about__card'>
                <MdCastForEducation className='about__icon' />
                <h5>Education</h5>
                <small> B.E in mechanical engineering From G.E.C Palanpur </small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Project</h5>
                <small>4+ Completed Project </small>
              </article>

              <article className='about__card'>
                <MdModelTraining className='about__icon' />
                <h5>Internship</h5>
                <small>  At Sofcon India Private Ltd. in PLC and SCADA</small>
              </article>

              <article className='about__card'>
                <FaReact className='about__icon' />
                <h5>Training</h5>
                <h5>React Js</h5>
                <small>At Elsner Lerning & Developement Institute initiated by Elsner Technologies pvt ltd. Ahemdabad</small>
              </article>

            </div>
            <p>
              Hi, I'm Sathawara Vishal, an engineer and React JS developer. I've worked on a variety of projects. and I'm also familiar with Bootstrap, React redux, React router and Material UI. When I'm not coding, I enjoy exploring new technologies and spending time with my family and friends. My goal is to continue growing my career in web development and work on exciting projects. Let's collaborate!
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>

          </div>
        </div>
      </section>
    </>
  )
}

export default About;

