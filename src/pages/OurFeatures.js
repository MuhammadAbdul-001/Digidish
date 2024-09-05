import features from "../images/Mask group.png";
function OurFeatures() {
  return (
    <section className="our-features-container">
      <h1 className="desktop">Features Designed For your Success</h1>
      <h1 className="mobile">FEATURES DESIGNED FOR YOUR SUCCESS</h1>
      <div className="our-features">
        <div className="features-cards">
          <div className="features-card">
            <p>
              <span>CUSTOMIZABLE TEMPLATE:</span>Choose from a variety of
              templates to match your organization style.
            </p>
          </div>
          <div className="features-card">
            <p>
              <span>MULTI-DEVICE COMPATIBILITY:</span>Access your digital menu
              on any device, anywhere.
            </p>
          </div>
          <div className="features-card">
            <p>
              <span>PHOTO AND DESCRIPTION UPLOADS:</span>Add detailed
              descriptions and high-quality images to showcase your menu.
            </p>
          </div>
          <div className="features-card">
            <p>
              <span>PRICE MANAGEMENT:</span>Easily update and manage prices for
              all your menu items.
            </p>
          </div>
        </div>
        <div className="features-img">
          <img src={features} alt="features-img" />
        </div>
      </div>
    </section>
  );
}

export default OurFeatures;
