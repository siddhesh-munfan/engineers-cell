import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3">
      <Container>
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </Container>
    </footer>
  );
};

export default Footer;
