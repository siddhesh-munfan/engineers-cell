import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const CustomNavbar = ({ language, setLanguage }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Engineers Cell</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="Select Language" id="language-dropdown">
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
