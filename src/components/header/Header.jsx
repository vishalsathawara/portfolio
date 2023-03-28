import react,{useEffect} from "react"
import "./Header.css"
import CTA from "./CTA"
import My from "./My.png"
import Ao from  "./Ao.png"

import At from "./At.png"
import HeadSocials from "./HeadSocials"
const Header = () => {
  useEffect(() => {
     document.title = "Portfolio Vishal Sathawara";
   }, []);
  const url = "https://res.cloudinary.com/dkvqwonfx/image/upload/v1673684240/2081A376-DCF7-4F0D-A9ED-DA9A9BE679C6_lhbwvl.jpg"
  return (

    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vishal Sathawara</h1>
        <h5 className="text-light">React js Developer</h5>
        <CTA />

        <HeadSocials />

        <div className="me">
          <img src={Ao} alt="loading" />
        </div>

        <a href="#contact" className="scroll__down">scroll down  </a>

      </div>
    </header>

  )
}

export default Header;

