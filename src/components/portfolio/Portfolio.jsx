import react from "react"
import "./Portfolio.css"


import coin from '../../assets/coin.jpeg'
import ecom from '../../assets/ecom.jpeg'
import emp from '../../assets/emp.jpeg'
import movie from '../../assets/movie.jpeg'

const Portfolio = () => {
  return (
    <>

      <section id="portfolio">
        <h5>My Recent Work </h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={coin} alt="IMG" />
            </div>
            <h3>Coin Info </h3>
            <div className="portfolio__item-cta">
              
            
              
              <a href="https://cryptoinfokingdom.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={ecom} alt="IMG" />
            </div>
            <h3>E-Commrce Store</h3>
            <div className="portfolio__item-cta">
              
              <a href="https://ecomstorebasic.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={emp} alt="IMG" />
            </div>
            <h3>Employee data : CRUD with Firebase Realtime Database</h3>
            <div className="portfolio__item-cta">
              
              <a href="https://employeesdatacrud.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={movie} alt="IMG" />
            </div>
            <h3>Movies World</h3>
            <div className="portfolio__item-cta">
              
              <a href="https://cinemasworld.netlify.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>

          
        </div>
      </section>

    </>
  )
}

export default Portfolio;

/** 




*/