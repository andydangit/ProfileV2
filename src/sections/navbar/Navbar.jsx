import "./navbar.css";

import Logo from '../../assets/logo.png'

function Navbar() {
  return (
    <nav>
      <div className="container nav_Container">
        <a href=""> 
         <img src={Logo} alt="" /> 
        </a>
        <ul></ul>
        <button></button>
      </div>
    </nav>
  );
}

export default Navbar;
