import react from "react";
import { BiCheck } from 'react-icons/bi';
import "./service.css"

const Service = () => {
  return (
    <>

      <section id='service'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container service__container">

          <article className="service">
            <div className="service__head">
              <h3>Web Development </h3>
            </div>
            <ul className="service__list">
              <li >
                <BiCheck className="service__list-icon" />
                <p>HTML</p>
              </li>
              <li >
                <BiCheck className="service__list-icon" />
                <p>CSS</p>
              </li>
              <li >
                <BiCheck className="service__list-icon" />
                <p>javaScript</p>
              </li>
              <li >
                <BiCheck className="service__list-icon" />
                <p>Bootsrap</p>
              </li>
              <li >
                <BiCheck className="service__list-icon" />
                <p>Responsive Design</p>
              </li>
              <li >
                <BiCheck className="service__list-icon" />
                <p>Testing/Debugging </p>
              </li>

            </ul>

          </article>


          {/** web devlopenet component end  */}

          <article className="service">
            <div className="service__head">
              <h3> React Js </h3>
            </div>
            <ul className="service__list">
              <li >
                <BiCheck className="service__list-icon" />
                <p>React js</p>
              </li>
              <li >
                <BiCheck className="service__list-icon" />
                <p>React Router</p>
              </li>
              <li >
                <BiCheck className="service__list-icon" />
                <p>React Redux</p>
              </li>
              <li >
                <BiCheck className="service__list-icon" />
                <p>React Loaders and Skeleton loading</p>
              </li>
              <li >
                <BiCheck className="service__list-icon" />
                <p>React Icons </p>
              </li>
              <li >
                <BiCheck className="service__list-icon" />
                <p>Material UI </p>
              </li>
              <li >
                <BiCheck className="service__list-icon" />
                <p>Axios</p>
              </li>
              <li >
                <BiCheck className="service__list-icon" />
                <p> Bootsrap </p>
              </li>
              <li >
                <BiCheck className="service__list-icon" />
                <p> Font Awesome Icons </p>
              </li>

            </ul>

          </article>
                <article className="service">
            <div className="service__head">
              <h3> Other.. </h3>
            </div>
            <ul className="service__list">
              <li >
                <BiCheck className="service__list-icon" />
                <p>PLC Automation</p>
              </li>
              <li >
                <BiCheck className="service__list-icon" />
                <p>SCADA</p>
              </li>
              <li >
                <BiCheck className="service__list-icon" />
                <p>3D Modeling on AutoCAD</p>
              </li>
              <li >
                <BiCheck className="service__list-icon" />
                <p>CREO Parametric Modeling</p>
              </li>
              <li >
                <BiCheck className="service__list-icon" />
                <p> NDT Testing </p>
              </li>
            </ul>

          </article>

        </div>
      </section>
    </>
  )
}
export default Service; 