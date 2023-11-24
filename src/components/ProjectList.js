import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {


  return (
    
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      {projects.map((project) => {
        return (<div key={project.id}>
          <ProjectItem technologies={project.technologies} name={project.name} about={project.about}/>
        </div>) 
        ;
      })}
      </div>
    </div>
  );
}

export default ProjectList;