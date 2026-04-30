import react from "react";
import "../styles/project.css";

const projectArr = [
   {name: "Roku Remote", link: ""},
   {name: "Twolio Verification", link: ""}, 
   {}, 
   {},
]


const Project = () => { 
    return ( 
        <> 
        <h1 className="projectName">Projects</h1>
        <div className="projectContainer">
        <ul className="displayProject"> 
            
        </ul>
        </div>
        </>
    )
}

export default Project