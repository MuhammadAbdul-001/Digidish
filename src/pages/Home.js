import Body from "../components/Body";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

function Home() {
  const [displayNav, setDisplayNav] = useState(false);
  return (
    <>
      <div>
        <Header displayNav={displayNav} setDisplayNav={setDisplayNav} />
        <Body />
        <Footer />
      </div>
      {displayNav && <Dropdown />}
      <div
        className={displayNav && "last-child"}
        onClick={() => {
          setDisplayNav(!displayNav);
        }}
      ></div>
    </>
  );
}

export default Home;
