import Buttons from "./Buttons";
function Hero() {
  return (
    <section className="hero-section">
      <h1 className="desktop">
        TRANSFORM YOUR <span>MENU</span> LIST WITH DIGIDISH <span>E-MENU</span>{" "}
        PLATFORM
      </h1>
      <h1 className="mobile">
        TRANSFORM YOUR <span>RESTAURANT'S</span> MENU WITH DIGIDISH{" "}
        <span>E-MENU</span> PLATFORM
      </h1>
      <p>
        Easily create, upload, and update your menus online with our intuitive
        digital solution.
      </p>
      <div className="get-started">
        <div className="blur-bg"></div>
        <img
          src="https://s3-alpha-sig.figma.com/img/afd1/bbe1/bdf4ec0e418f7549fbdb7308dbe783cb?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FIVZnkFSF08sFnZlMmtZ68e1QFwKAMxbzcKQeTEO0s3phj2eJiTBuE-4J3bBO9S2SLv9c7va3kb9OebdXHmS5dDuZyln3YbC46jhLblm29vAzBdYPzCAF9d2X2PDMjZtv~5rV-HBxAEgeZeI8QSiYofjKE5G3j-objeuC-oCxW-M1E-esF7gmxGDJbN4gquElUqhbddCdWkjPXGjFSLjYfVOUaoohmNX3royVi7paDb6-xYhYQCpEtKdRNjhBr5g1Us5WSIifW5Fw8w5WaLaVeqODAJxQxi7rwdWZO0dEIUcPq~cjJdIW0fAPNwOoFawmaQotKXTl0pofDZwgMgJfg__"
          alt="The Ultimate Guide to Digital Menus for Restaurants.png"
        />
        <div className="get-started-container">
          <Buttons>Get started</Buttons>
          <button className="watch-demo">Watch demo</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
