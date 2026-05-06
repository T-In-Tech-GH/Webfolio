import { useState, useEffect } from "react";
import "../styles/Hero.css";


const Hero = () => { 

const roles = ["Software Engineer"];

return ( 
    <>
    <div className="gridContainer">
    <div className="container1">
    <h4 className="greeting">Hello,</h4>
    <p className="introduction">I'm <span className="mySpan">Terrence</span></p>
    <p className="role">and I'm a <span className="role2">{roles}<span className="blinker">|</span></span></p>
    </div>
    </div>
    </>
  )
}

export default Hero 