import "../styles/Skills.css";

  const language = [ 
    {name: "JavaScript", progress: "60%"},
    {name: "Python", progress: "30%"},
    {name: "C++", progress: "5%"},
    {name: "Java", progress: "10%"},
  ]

  const frameworks = [
    {name: "React", progress: "55%"},
    {name: "Node.js", progress: "40%"},
    {name: "Express", progress: "35%"},
    {name: "Django", progress: "20%"},
  ]

  const Skills = () => { 
    return ( 
        <> 
        <h2 className="languageName">Languages</h2>

            <div className="radialContainer"> 
                {language.map((lang, index) => ( 
                    <li key={index} className="listChild">{lang.name}: {lang.progress}</li>
                ))}
            </div>

        <h2 className="frameName">Frameworks</h2>
         <div className="frame">
                {frameworks.map((framework, index) => ( 
                    <div key={index} className="listChild">{framework.name}: {framework.progress}</div>
                ))}
            </div>
        
        </>
    )
}

export default Skills;