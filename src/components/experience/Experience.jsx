import react from "react"
import "./Experience.css"
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  
  return (
    <>


      <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Expertise</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icons' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icons' />
                <div><h4>CSS</h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icons' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icons' />
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icons' />
                <div>
                  <h4>React Js </h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icons' />
                <div>
                  <h4>Material UI</h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icons' />
                <div>
                  <h4>React Icons</h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icons' />
                <div>
                  <h4>Font Awesome Icons</h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icons' />
                <div>
                  <h4>React Router </h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icons' />
                <div>
                  <h4>React Redux </h4>
                  <small className='text-light'>Intermidiate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icons' />
                <div>
                  <h4>Tailwindcss </h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              
            </div>
          </div>



        </div>
      </section>

    </>
  )
}

export default Experience;