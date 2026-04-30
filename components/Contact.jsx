import react from "react";
import "../styles/Contact.css";







const Contact = () => { 
return ( 
    <> 
    <h1 className="contactName">Contact</h1>
    <a href="tel:18645908123">
        <button className="callButton">Call Me</button>
        </a>
        <input type="text" placeholder="Send email" /> 
    <a href="mailto: Terrencew867@gmail.com"> 
        <button className="emailBtn">Email</button>
        </a>

    </>
)
}

export default Contact