import "../Design/Footer.css";
import ig from "../Assets/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-padding">
        <div className="footer-links">
          <a href="/faq" className="footer-links-div">
            <h4>FAQs</h4>
          </a>
          <div className="footer-links-div">
            <h4>Contacts</h4>
            <p>(021)1600 400</p>
            <p>OddJobs.gmail.com</p>
            <p>
              <img src={ig} alt="IG"></img>
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-below">
        <div className="copyright">
          <p>2023 OddJobs.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
