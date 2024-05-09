import "./navbar.css";

import Logo from "../../assets/logo.png";
import data from "./data";
import { RxColorWheel } from "react-icons/rx";

function Navbar() {
  return (
    <nav>
      <div className="container nav_container">
        <a href="index.html" className='nav_logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav_menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme_icon"><RxColorWheel /></button>
      </div>
    </nav>
  );
}

export default Navbar;
