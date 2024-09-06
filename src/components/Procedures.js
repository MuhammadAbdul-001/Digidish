import signUp from "../images/sign-up.png";
import uploadMenu from "../images/upload-menu.png";
import customize from "../images/customize.png";
import goLive from "../images/go-live.png";
function Procedures() {
  return (
    <section className="procedures-container">
      <h1>How it works</h1>
      <div className="procedure-cards">
        <div className="procedure-card">
          <div className="text">
            <h1>01</h1>
            <div>
              <h1 className="h1">Sign up</h1>
              <p>Create your account and set up your organization profile</p>
            </div>
          </div>
          <div className="img">
            <img src={signUp} alt="sign up" />
          </div>
        </div>
        <div className="procedure-card desktop">
          <div className="text">
            <h1>02</h1>
            <div>
              <h1 className="h1">Upload Menu</h1>
              <p>
                Add category and your menu items, description, prices, and
                images
              </p>
            </div>
          </div>
          <div className="img">
            <img src={uploadMenu} alt="sign in" />
          </div>
        </div>
        <div className="procedure-card pro-mobile">
          <div className="img">
            <img src={uploadMenu} alt="upload menu" />
          </div>
          <div className="text">
            <h1>02</h1>
            <div>
              <h1 className="h1">Upload Menu</h1>
              <p>
                Add category and your menu items, description, prices, and
                images
              </p>
            </div>
          </div>
        </div>
        <div className="procedure-card">
          <div className="text">
            <h1>03</h1>
            <div>
              <h1 className="h1">Customize</h1>
              <p>Choose a template and customize your digital menu</p>
            </div>
          </div>
          <div className="img">
            <img src={customize} alt="customize" />
          </div>
        </div>
        <div className="procedure-card desktop">
          <div className="text">
            <h1>04</h1>
            <div>
              <h1 className="h1">Go Live</h1>
              <p>
                Generate bar code and provide your customers with an exceptional
                dining experience
              </p>
            </div>
          </div>
          <div className="img">
            <img src={goLive} alt="go live img" />
          </div>
        </div>
        <div className="procedure-card pro-mobile">
          <div className="img">
            <img src={goLive} alt="go live image" />
          </div>
          <div className="text">
            <h1>04</h1>
            <h1 className="h1">Go Live</h1>
            <p>
              Generate bar code and provide your customers with an exceptional
              dining experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Procedures;
