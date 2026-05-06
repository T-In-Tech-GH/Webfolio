import "../styles/About.css";
import image from "../src/assets/Myimg.jpeg";
const About = () => { 

    const img = image;
    const about = "I'm a frontend software engineer from South Carolina with my BS in computer science. My most used frameworks and languages are Java, Javascript, Python, React, and Next.";

    return ( 
        <> 
        <div className="gridContainer">
        <h1 className="about">About Me</h1>
        <div className="grid-item containerAbout">
        <img className="grid-item image" src={img}></img>
        <p className="grid-item aboutMe">{about}</p>
        </div>
        </div>
        </>
    )
}

export default About;