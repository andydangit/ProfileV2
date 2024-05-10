import "./about.css";

import AboutImage from '../../assets/tree.png'
import Resume from '../../assets/Resume2024.pdf'
import {HiDownload} from 'react-icons/hi'

function About() {
  return (
    <section id="about">
      <div className="container about_container">
        <div className="about_left">
          <div className="about_portrait">
            <img src={AboutImage} alt="About pic" /> 
          </div>
        </div>
        <div className="about_right"></div>
        <h2>About Me</h2>
        <div className="about_cards"></div>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quis accusantium architecto et asperiores, voluptas nam in. Fugit explicabo fuga neque. Laboriosam, inventore. Dicta ipsum nam dolorum quaerat. Ratione, facilis.
          </p> 
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores corporis harum a beatae! Beatae sit ut voluptate eveniet dolorum officiis aliquam molestias assumenda quia hic distinctio officia natus repellat reiciendis possimus dicta, minus alias.
          </p>
          <a href={Resume} download className="btn primary">Download CV<HiDownload /></a>
      </div>
    </section>
  );
}

export default About;
