import "./navbar.css";

import Logo from "../../assets/logo.png";
import data from "./data";
import { RxColorWheel } from "react-icons/rx";

function Navbar() {
  return (
    <nav>
      <div className="container nav_Container">
        <a href="index.html" className='navLogo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav_menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="themeIcon"><RxColorWheel /></button>
      </div>
    </nav>
  );
}

export default Navbar;
