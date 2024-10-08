import { Container } from "react-bootstrap";
import CustomNavbar from "./components/CustomNavbar";
import RegisterForm from "./components/RegisterForm"; // Your form component
import PosterImage from "./components/PosterImage"; // Your poster image component
import MapBox from "./components/MapBox";
import Footer from "./components/Footer"; // Your footer component
import { useState } from "react";

const App = () => {
  const [language, setLanguage] = useState("en");

  return (
    <>
      {/* Navbar */}
      <CustomNavbar language={language} setLanguage={setLanguage} />

      {/* Main Content */}
      <Container fluid className="mt-4">
        {/* Row for Form and Poster Image */}
        <div className="row">
          <div className="col">
            <RegisterForm language={language} />
          </div>
          <div className="col">
            <PosterImage />
            <MapBox />
          </div>
        </div>
      </Container>

      {/* Footer */}
      <Footer language={language} />
    </>
  );
};

export default App;
