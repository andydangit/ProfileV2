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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam asperiores sapiente quod quia tenetur culpa. Eligendi autem minus officia consequuntur!
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quasi, commodi ullam animi sapiente corrupti, laborum iure, necessitatibus quas nemo saepe ipsa possimus a tempore assumenda? Eveniet expedita nulla labore facilis quasi, a modi eligendi!
            </p>
            <a href={Resume} download className='btn primary'>Download CV <HiDownload/></a>
        </div>
    </div>
</section>
  );
}

export default About;
