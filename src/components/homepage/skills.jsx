import React from "react";
import "./styles/skills.css";

const skillsData = {
  frontend: [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png" },
    { name: "React", logo: "../icon/react.png" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png" },
    { name: "CSS3", logo: "../icon/css.png" },
    { name: "Bootstrap", logo: "../icon/bootstrap.png" },
  ],
  backend: [
    { name: "Python", logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png" },
    { name: "Flask", logo: "../icon/flask.png" },
    { name: "PHP", logo: "../icon/php.png" },
    { name: "MongoDB", logo: "../icon/mongodb.png" },
    { name: "Mysql", logo: "../icon/mysql.png" },

  ],
  other: [
    { name: "GitHub", logo: "../icon/github.png" },
    { name: "Jira", logo: "../icon/jira.png" },
    { name: "GIS", logo: "../icon/gis.png" },
    { name: "Balsamiq", logo: "../icon/balsamiq.png" },
  ],
};

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="skills-title">SKILLS</h2>
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="skills-category">
          <h3 className="skills-category-title">
            {category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ")}
          </h3>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <img src={skill.logo} alt={skill.name} className="skill-logo" />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
