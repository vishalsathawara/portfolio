import react from "react"
import "./Footer.css"
import { MdOutlineEmail  } from 'react-icons/md'
import  { BsInstagram } from 'react-icons/bs'
import { IoLogoGithub } from 'react-icons/io'
import { BsLinkedin } from 'react-icons/bs'
const Footer =()=>{
  return (
    <>
        <footer>
      <a href="#" className='footer__logo'>Vishal Sathawara</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="mailto:sathawaravishal10@gmail.com"><MdOutlineEmail/></a>
        <a href="https://www.instagram.com/vishal_sathawara_2001/" target="_blank" rel="noreferrer"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/sathawara-vishal-1b2859194" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/vishalsathawara" target= "_blank" rel="noreferrer"><IoLogoGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Vishal Sathawara. All right reserved.</small>
      </div>
    </footer>
    </>
  )
}

export default Footer;

