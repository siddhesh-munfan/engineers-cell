import translations from "./translations";
import PropTypes from "prop-types";

const Footer = ({ language  }) => {
  return (
    <footer
      style={{
        backgroundColor: "#f1f1f1",
        marginTop: "16px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p>&copy; {translations[language].copyright}</p>
      
    </footer>
  );
};
Footer.propTypes = {
  language: PropTypes.string,
};

export default Footer;
