import Buttons from "./Buttons";

function Dropdown() {
  return (
    <div className="dropdown">
      <ul className="">
        <li className="home">
          Home <div></div>
        </li>
        <li>Features</li>
        <li>How it works</li>
        <li>Contact us</li>
      </ul>
      <Buttons>Log in</Buttons>
    </div>
  );
}

export default Dropdown;
