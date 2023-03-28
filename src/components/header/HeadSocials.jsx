import react from "react"
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const HeadSocials = () => {
  return (
    
    <>
      <div className="header__socials">
        <a href="https://www.linkedin.com/in/sathawara-vishal-1b2859194" target= "_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/vishalsathawara" target="_blank" rel="noreferrer"> <FaGithub /> </a>
        <a href="mailto:sathawaravishal10@gmail.com" targer="_blank" rel="noreferrer"> <MdEmail /> </a>

      </div>
    </>
  )
}

export default HeadSocials;