import translations from "./translations";
import PropTypes from "prop-types";
import { GeoAlt,Telephone, Envelope } from 'react-bootstrap-icons';


const Footer = ({ language }) => {
  return (
    <>
      <div className="footer d-flex flex-row justify-content-evenly ">

        <div className="footer-card p-2 text-center">
          <GeoAlt />
          <h6>Address</h6>
          <h6>A 108 Adam Street</h6>
        </div>

        <div className="footer-card p-2 text-center">
          <Telephone />
          <h6>+91 7758026057</h6>
        </div>

        <div className="footer-card p-2 text-center">
          <Envelope />
          <h6>info@example.com</h6>
        </div>

        <div className="footer-card p-2 text-center">
          <Envelope />
          <h6>info@example.com</h6>
        </div>
      </div>
      <footer
        style={{
          backgroundColor: "#f1f1f1",
          marginTop: "16px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        {/* </footer> */}
        {/* <h4>Address</h4> */}

        <p>&copy; {translations[language].copyright}</p>

      </footer>
    </>

  );
};
Footer.propTypes = {
  language: PropTypes.string,
};

export default Footer;
