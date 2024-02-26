import "./about.css"
import AboutMain from "./AboutMain"
import AboutBody from "./AboutBody"
import AboutBrand from "./AboutBrand"

function About() {
  return (
  <>
  <div className="mainabout">
    <AboutMain/>
    <AboutBody/>  
    <AboutBrand/>
    </div>
  </>
  )
}

export default About