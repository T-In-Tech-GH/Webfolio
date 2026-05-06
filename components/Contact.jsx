import react from "react";
import "../styles/Contact.css";





const links = [ 
    {name: "linkedin", logo: "bx bxl-linkedin", link: "https://www.linkedin.com/in/terrence-wright-b46652329"}, 
    {name: "github", logo: "bx bxl-github", link: "https://github.com/T-In-Tech-GH"},
    {name: "upwork", logo: "bx bxl-upwork", link: "https://www.upwork.com/freelancers/~01d62073bf3be1c502?mp_source=share"},
]

const Contact = () => { 
return ( 
    <> 
    <h1 className="contactName">Contact</h1>
     <div className="grid-item logoContainer">
        <div className="comBtns">
    <a href="tel:18645908123">
        <button className="grid-item callButton">Call Me</button>
        </a>
    <a href="mailto: Terrencew867@gmail.com"> 
        <button className="grid-item emailBtn">Email</button>
        </a>
        </div>
   <ul className="grid-item linkLogo">
     {links.map((icon, index) => ( 
        <li className="grid-item iconName" key={index}> 
        <a className={icon.logo} href={icon.link}></a>
        </li>
     ))}
    </ul>
    </div>
    </>
)
}

export default Contact