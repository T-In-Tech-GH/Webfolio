import "../styles/Skills.css";

  const language = [ 
    {name: "JavaScript", progress: "60%", icon: "bx bxl-javascript"},
    {name: "Python", progress: "30%", icon: "bx bxl-python"},
    {name: "C++", progress: "5%", icon: "bx bxl-c-plus-plus"},
    {name: "Java", progress: "10%", icon: "bx bxl-java"},
  ]

  const frameworks = [
    {name: "React", progress: "55%", icon: "bx bxl-react"},
    {name: "Node.js", progress: "40%", icon: "bx bxl-nodejs"},
    {name: "Vue", progress: "35%", icon: "bx bxl-vuejs"},
    {name: "Django", progress: "20%", icon: "bx bxl-angular"},
  ]

  const Skills = () => { 
    return ( 
        <> 
        <h2 className="languageName">Languages</h2>

            <div className="radialContainer"> 
                {language.map((lang, index) => ( 
                    <div className="radialBar">
                    <span key={index} className={lang.icon}></span>
                    </div>
                ))}
            </div>

        <h2 className="frameName">Frameworks</h2>
         <div className="radialContainer">
                {frameworks.map((framework, index) => (
                    <div className="radialBar">
                      <span key={index} className={framework.icon}>
                      </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Skills;