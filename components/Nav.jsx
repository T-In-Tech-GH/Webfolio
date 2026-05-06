import "../styles/Nav.css";
import { useState } from "react";

const Nav = () => { 

const navObj = [ 
    {name: "Home", path: "/"},
    {name: "About", path: "./About"},
    {name: "Skills", path: "./Skills"},
    {name: "Contact", path: "./Contact"},
]

const [isOpen, setIsopen] = useState(false);

    return (
        <> 
        <div className="container">
        <h4 className="logo">T-In-Tech</h4>
        <ul className="link-list"> 
            {navObj.map((link, index) => ( 
                <li className="link-name" key={index}>
                <a href={link.path}>{link.name}</a>
                </li>
            ))}
        </ul>
        </div>
        <div className="hamburgerMenu" onClick={() => setIsopen(!isOpen)}>☰</div>
        {isOpen && ( 
            <ul> 
                {navObj.map((link, index) => ( 
                    <li key={index}>
                        <a href={link.path}>{link.name}</a>
                    </li>
                ))}
            </ul>
        )}
        </>
    )
}

export default Nav