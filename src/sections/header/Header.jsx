import "./header.css";

import headerImag from "../../assets/headerPic.jpg";

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
          {
            
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
