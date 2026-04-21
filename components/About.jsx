import "../styles/About.css";
import image from "../src/assets/Myimg.jpeg";
const About = () => { 

    const img = image;

    return ( 
        <> 
        <div className="gridContainer">
        <h1 className="about">About Me</h1>
        <div className="grid-item containerAbout">
        <img className="grid-item image" src={img}></img>
        <p className="grid-item aboutMe">I'm a Software Engineer specializing in the frontend using languages like HTML, CSS, Javascript and utilizing tools like React, and Vue. My goal is to solve real world problems with logic, code, and critical thinking.</p>
        </div>
        </div>
        </>
    )
}

export default About;