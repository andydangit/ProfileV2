import "./about.css";

import AboutImage from "../../assets/tree.png";
import Resume from "../../assets/Resume2024.pdf";
import { HiDownload } from "react-icons/hi";
import Card from "../../components/Card";
import data from "../about/data";

function About() {
  return (
    <section id="about">
    <div className="container about_container">
        <div className="about_left">
            <div className="about_portrait">
                <img src={AboutImage} alt="About pic" />
            </div>
        </div>
        <div className="about_right">
            <h2>About Me</h2>
            <div className="about_cards">
                {
                    data.map(item => (
                        <Card key={item.id} className="about_card">
                            <span className='about_card-icon'>{item.icon}</span>
                            <h5>{item.title}</h5>
                            <small>{item.desc}</small>
                        </Card>
                    ))
                }
            </div>
            <p>
            My name is Andy Dang, and I bring over 12 years of extensive experience in Technical Support and System Management.Presently, I stand as a full stack developer with over 3 years of experience. My competencies span a wide array of technologies including HTML, CSS, JavaScript, React, ASP.NET, C#, Microsoft SQL, Figma, Photoshop and Azure.
            </p>
            <p>
            My academic journey led me to achieve a Bachelor's Degree in Management Information Systems from the University of Central Oklahoma. Complementing this, I pursued certifications in advanced computer language courses, fueling my passion for continuous learning and problem-solving.
            </p>
            <p>Beyond the confines of my professional endeavors, I find solace in enriching my knowledge through podcasts that delve into leadership, business strategies, and cutting-edge technology. Additionally, I prioritize maintaining a balanced lifestyle by indulging in activities like running, savoring cinematic experiences, and cherishing moments with loved ones</p>
            <a href={Resume} download className='btn primary'>Download CV <HiDownload/></a>
        </div>
    </div>
</section>
  );
}

export default About;
