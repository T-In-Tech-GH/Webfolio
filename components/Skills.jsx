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
      <h2 className="grid-item languageName">Languages</h2>  
        <div className="grid item gridContainerSkills">
            <div className="grid-item radialContainer"> 
                {language.map((lang, index) => (
                    <div className="grid-item wrapper">
                      <span key={index} className={lang.icon}></span>
                    <div className="progressBar" style={{ width: `${language.progress}`}}>
                        <span></span>
                    </div>
                    </div>
                ))}
            </div>
            </div>

       <h2 className="grid-item frameName">Frameworks</h2>
       <div className="grid item gridContainerSkills">
         <div className="grid-item radialContainer">
                {frameworks.map((framework, index) => (
                    <div className="grid-item wrapper">
                    <span key={index} className={framework.icon}></span>
                      <div className="grid-item progressBar" style={{ width: `${framework.progress}`}}>
                        <span></span>
                      </div>
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}

export default Skills;