import mobileFooter from "../images/footer-mobile-logo.png";
import desktopFooter from "../images/footer-desktop-logo.png";
import facebook from "../images/facebook-logo.png";
import instagram from "../images/instagram-logo.png";
import linkdn from "../images/linkdn-logo.png";
function Footer() {
  return (
    <footer className="footer">
      <div>
        <div>
          <div className="mobile">
            <img src={mobileFooter} alt="logo" />
          </div>
          <div className="desktop">
            <img src={desktopFooter} alt="logo" />
          </div>
          <div className="desktop">
            <p>Subscribe to our newsletter for updates and exclusive content</p>
            <div className="social-media">
              <span>
                <img src={facebook} alt="facebook" />
              </span>
              <span>
                <img src={instagram} alt="instagram" />
              </span>
              <span>
                <img src={linkdn} alt="linkdn" />
              </span>
            </div>
          </div>
        </div>
        <div className="links">
          <div>
            <h2>Quick Links</h2>
            <ul>
              <li>Features</li>
              <li>How it works</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div>
            <h2>Contact Information</h2>
            <ul>
              <li>Digidish@gmail.com</li>
              <li>How it works</li>
              <li>+2348112345953</li>
            </ul>
          </div>
        </div>
        <div className="mobile">
          <p>Subscribe to our newsletter for updates and exclusive content</p>
          <div className="social-media">
            <span>
              <img src={facebook} alt="facebook" />
            </span>
            <span>
              <img src={instagram} alt="instagram" />
            </span>
            <span>
              <img src={linkdn} alt="linkdn" />
            </span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright: "© 2024 Rogue designers. All rights reserved."</p>
      </div>
    </footer>
  );
}

export default Footer;
