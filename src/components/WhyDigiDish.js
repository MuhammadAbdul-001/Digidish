import easyMenu from "../images/easy.png";
import liveUpdate from "../images/update-alt-2 1.png";
import visualAppealing from "../images/heart-eyes-face 1.png";
import userHeart from "../images/user-heart 1.png";
import menuSolution from "../images/menu-management.png";
import mobileMenuManagement from "../images/menu-management-mobile.png";
function WhyDigidish() {
  return (
    <section className="why-digidish-container">
      <h1 className="desktop">Why Digidish?</h1>
      <h1 className="mobile">WHY E-MENU PLATFORM?</h1>
      <div className="why-digidish">
        <div className="digidish-cards">
          <div className="digidish-card">
            <div>
              <div></div>
              <div className="title">
                <div>
                  <img src={easyMenu} alt="easy menu management" />
                </div>
                <h3>Easy Menu Management</h3>
              </div>
            </div>
            <p>Create, upload, and update menu items effortlessly</p>
          </div>
          <div className="digidish-card">
            <div>
              <div></div>
              <div className="title">
                <div>
                  <img src={liveUpdate} alt="easy menu management" />
                </div>
                <h3>Real-Time Update</h3>
              </div>
            </div>
            <p>Ensure your menu is always up-to-date with real-time changes</p>
          </div>
          <div className="digidish-card">
            <div>
              <div></div>
              <div className="title">
                <div>
                  <img src={visualAppealing} alt="easy menu management" />
                </div>
                <h3>Visual Appealing</h3>
              </div>
            </div>
            <p>Provide customers with a modern and engaging digital menu</p>
          </div>
          <div className="digidish-card">
            <div>
              <div></div>
              <div className="title">
                <div>
                  <img src={userHeart} alt="easy menu management" />
                </div>
                <h3>User-Friendly Interface</h3>
              </div>
            </div>
            <p>Intuitive design makes managing your menu simple and easy</p>
          </div>
        </div>
        <p>Enhance Your Menu Management</p>
        <p> Experience with Our Digital Menu Solution</p>
        <div className="menu-solution desktop">
          <img src={menuSolution} alt="menu management" />
        </div>
        <div className="menu-solution mobile">
          <img src={mobileMenuManagement} alt="menu management" />
        </div>
      </div>
    </section>
  );
}

export default WhyDigidish;
