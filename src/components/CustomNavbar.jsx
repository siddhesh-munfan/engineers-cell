import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import translations from "./translations";

const CustomNavbar = ({ language, setLanguage }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home" className="mx-2">
        {translations[language].navbarTitle}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-between"
      >
        <Nav className="mr-auto"></Nav>
        <Nav className="mx-2">
          <NavDropdown
            title={translations[language].selectLanguage}
            id="language-dropdown"
          >
            <NavDropdown.Item onClick={() => setLanguage("en")}>
              English
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setLanguage("hi")}>
              Hindi
            </NavDropdown.Item>
            <NavDropdown.Item onClick={() => setLanguage("mr")}>
              Marathi
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
