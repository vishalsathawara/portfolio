import react from "react"
import V from "./V.pdf"



// CV ADD REMAINING 
const CTA = () => {
  return (
    <>
      <div className="cta">
        <a href={V} download className="btn">Download CV </a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </>
  )
}

export default CTA;