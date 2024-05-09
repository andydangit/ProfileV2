import "./header.css";

import headerImag from "../../assets/headerPic.jpg";
import data from "./data";

function Header() {
  return (
    <header id="header">
      <div className="container header_container"></div>
      <div className="header_profile">
        <img src={headerImag} alt=" Portrait Header" />
        <h3> Andy Dang </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
          molestias nam dolores. Facere.
        </p>
        <div className="header_cta">
          <a href="#contact"> Contact me</a>
          <a href="#portfolio"> My Project </a>
        </div>
        <div className="header_socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            > {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
