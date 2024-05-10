import "./portfolio.css";

import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data from "./data";
import { useState } from "react";

function Portfolio() {
  const [projects, setProjects] = useState(data);

  const categories = data.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProjectHandle = (category) => {
    if (category === "all") {
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };

  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      <p> Please take a look at some of my projects</p>
      <div className="container portfolio_container">
        <ProjectsCategories categories={uniqueCategories} onFilterProjects ={filterProjectHandle} />
        <Projects projects={projects} />
      </div>
    </section>
  );
}

export default Portfolio;
