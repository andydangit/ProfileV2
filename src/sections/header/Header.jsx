import "./header.css";

// import headerImage from "../../assets/headerPic.jpg";
import headerImage from "../../assets/Stair.png";

import data from "./data";

function Header() {
  return (
    <header id="header">
      <div className="container header_container">
        <div className="header_profile">
          <img src={headerImage} alt=" Portrait Header" />
        </div>
        <h3> Andy Dang </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
          molestias nam dolores. Facere. lorem
        </p>
        <div className="header_cta">
          <a href="#contact" className="btn primary"> Contact me</a>
          <a href="#portfolio" className="btn light"> My Project </a>
        </div>
        <div className="header_socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
