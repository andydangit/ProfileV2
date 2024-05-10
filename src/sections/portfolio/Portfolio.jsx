import './portfolio.css'

import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import data from './data'
import {useState} from 'react'

function Portfolio() {
 const [projects, setProjects] = useState(data);

  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      <p> Please take a look at some of my projects</p>
      <div className='container portfolio_container'>
        <ProjectsCategories />
        <Projects projects={projects}/>
      </div>
      </section>
  )
}

export default Portfolio