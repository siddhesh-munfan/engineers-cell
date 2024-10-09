import { Container } from "react-bootstrap";
import CustomNavbar from "./components/CustomNavbar";
import RegisterForm from "./components/RegisterForm";
import PosterImage from "./components/PosterImage"; 
import MapBox from "./components/MapBox";
import Footer from "./components/Footer"; // Your footer component
import translations from "./components/translations";
import { useState } from "react";

const App = () => {
  const [language, setLanguage] = useState("en");

  return (
    <>
      {/* Navbar */}
      <CustomNavbar language={language} setLanguage={setLanguage} />

      {/* Main Content */}
      <Container fluid className="d-flex flex-column mt-4 text-center">
        <h4>{translations[language].title}</h4>

        <Container fluid className="mt-4">
          {/* Row for Form and Poster Image */}
          <div className="row">
            <div className="col-12 col-md-6">
              <RegisterForm language={language} />
            </div>
            <div className="col-12 col-md-6">
              <PosterImage />
              <MapBox />
            </div>
          </div>
        </Container>

      </Container>

      {/* Footer */}
      <Footer language={language} />
    </>
  );
};

export default App;
