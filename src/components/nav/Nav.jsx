import react, { useState } from "react"
import "./Nav.css"
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';







const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <>
      <nav>
        <a onClick={() => setActiveNav('#')} className={activeNav === '#' ? "active" : ""} href="#"> <AiOutlineHome /> </a>
        <a onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ""} href="#about"> <AiOutlineUser /> </a>
        <a onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ""} href="#experience"> <BiBook /> </a>
        <a onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ""} href="#service"> <RiServiceLine /> </a>
        <a onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? "active" : ""} href="#portfolio"> <AiOutlineFundProjectionScreen/> </a>
        <a onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ""} href="#contact"> <BiMessageSquareDetail /> </a>

      </nav>
    </>
  )
}

export default Nav;

