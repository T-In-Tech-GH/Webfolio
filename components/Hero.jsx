import { useState, useEffect } from "react";
import "../styles/Hero.css";


const Hero = () => { 

const roles = ["Software Engineer", "Software Developer"];

return ( 
    <>
    <div className="gridContainer">
    <div className="container1">
    <h4 className="greeting">Hello,</h4>
    <p className="introduction">I'm <span className="mySpan">Terrence</span></p>
    <p className="role">and I'm a <span className="blinker">Frontend:</span> <span className="role2">{roles[0]}</span></p>
    </div>
    </div>
    </>
  )
}

export default Hero 