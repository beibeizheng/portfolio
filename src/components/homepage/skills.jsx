import React from "react";
import "./styles/skills.css";

const skillsData = {
  frontend: [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png" },
    { name: "React", logo: `${process.env.PUBLIC_URL}/icon/react.png` },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png" },
    { name: "CSS3", logo: `${process.env.PUBLIC_URL}/icon/css.png` },
    { name: "Bootstrap", logo: `${process.env.PUBLIC_URL}/icon/bootstrap.png` },
  ],
  backend: [
    { name: "Python", logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png" },
    { name: "Flask", logo: `${process.env.PUBLIC_URL}/icon/flask.png` },
    { name: "PHP", logo: `${process.env.PUBLIC_URL}/icon/php.png` },
    { name: "MongoDB", logo: `${process.env.PUBLIC_URL}/icon/mongodb.png` },
    { name: "Mysql", logo: `${process.env.PUBLIC_URL}/icon/mysql.png` },
  ],
  other: [
    { name: "GitHub", logo: `${process.env.PUBLIC_URL}/icon/github.png` },
    { name: "Jira", logo: `${process.env.PUBLIC_URL}/icon/jira.png` },
    { name: "GIS", logo: `${process.env.PUBLIC_URL}/icon/gis.png` },
    { name: "Balsamiq", logo: `${process.env.PUBLIC_URL}/icon/balsamiq.png` },
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
