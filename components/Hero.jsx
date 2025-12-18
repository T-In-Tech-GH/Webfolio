import { useState } from "react";
import "../styles/Hero.css";
import image from "../src/assets/Myimg.jpeg";

const Hero = () => { 
  const [role, setRole] = useState("Software Engineer");

  if (role !== "Software Engineer") { 
    setRole("Web Developer")
  }


  const img = image;

  
    
return ( 
    <>
    <div className="container1">
    <h4 className="greeting">Hello,</h4>
    <p className="introduction">I'm <span className="mySpan">Terrence</span></p>
    <p className="role">and I'm a <span className="role2">Software Engineer</span></p>
    </div>
    <img className="image" src={img} />  
    </>
)


}

export default Hero 