import "./navbar.css";

import Logo from "../../assets/logo.png";
import data from "./data";

function Navbar() {
  return (
    <nav>
      <div className="container nav_Container">
        <a href="">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav_menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button></button>
      </div>
    </nav>
  );
}

export default Navbar;
