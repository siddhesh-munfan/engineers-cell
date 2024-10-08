import { Container } from "react-bootstrap";
import CustomNavbar from "./components/CustomNavbar";
import RegisterForm from "./components/RegisterForm"; // Your form component
import PosterImage from "./components/PosterImage"; // Your poster image component
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

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: "1" }}>
            <RegisterForm language={language} />
          </div>

          <div style={{ flex: "1" }}>
            <PosterImage />
          </div>
        </div>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
