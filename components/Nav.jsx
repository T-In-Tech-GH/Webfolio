import "../styles/Nav.css";

const Nav = () => { 

const navObj = [ 
    {name: "Home", path: "/"},
    {name: "About", path: "./About"},
    {name: "Skills", path: "./Skills"},
    {name: "Contact", path: "./Contact"},

]

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
        </>
    )
}

export default Nav