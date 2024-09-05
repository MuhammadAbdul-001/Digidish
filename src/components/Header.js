import { NavLink } from "react-router-dom";
import Buttons from "./Buttons";
import logo from "../images/logo-desktop.png";
import mobileLogo from "../images/logo-mobile.png";
import optionBar from "../images/option-bar-settings-1400 1.png";
function Header({ displayNav, setDisplayNav }) {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="desktop" />
      <img src={mobileLogo} alt="logo" className="mobile" />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/features">Features</NavLink>
        </li>
        <li>
          <NavLink to="/how">How it works</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact us</NavLink>
        </li>
      </ul>
      <div
        className="mobile"
        onClick={() => {
          setDisplayNav(!displayNav);
        }}
      >
        <img src={optionBar} alt="option bar" />
      </div>
      <Buttons>Log in</Buttons>
    </header>
  );
}

export default Header;
