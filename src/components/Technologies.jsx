import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiNpm,
  DiGit,
  DiSass,
  DiMongodb,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css3", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "NODE", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MYSQL", icon: <DiMysql /> },
  { id: "react", name: "REACT", icon: <DiReact /> },
  { id: "npm", name: "NPM", icon: <DiNpm /> },
  { id: "git", name: "GIT", icon: <DiGit /> },
  { id: "sass", name: "SASS", icon: <DiSass /> },
  { id: "mongo", name: "MongoDb", icon: <DiMongodb /> },
];

const Technologies = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.name}>
            {tech.icon}
            <div className="technology-info">
            <h4>{tech.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
