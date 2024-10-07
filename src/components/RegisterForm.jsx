// src/DistrictForm.js
import  { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import translations from "./translations";
import CustomNavbar from "./CustomNavbar";
import districtsData from "./districtsData.json"; // Adjust path as needed

const engineeringBranches = [
  "Computer Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "E&TC Engineering",
  "Information Technology",
];

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [branch, setBranch] = useState("");
  const [photo, setPhoto] = useState(null);
  const [language, setLanguage] = useState("en");

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
    setTaluka(""); // Reset taluka when district changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${name}\nEmail: ${email}\nAddress: ${address}\nPhone: ${phoneNumber}\nDistrict: ${district}\nTaluka: ${taluka}\nBranch: ${branch}`
    );
  };

  return (
    <>
      <CustomNavbar language={language} setLanguage={setLanguage} />
      <Container className="mt-5">
        <h2>{translations[language].title}</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="photo" className="mb-3">
            <Form.Label>Upload Photo</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              required
            />
          </Form.Group>

          <Form.Group controlId="name" className="mb-3">
            <Form.Label>{translations[language].name}</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="email" className="mb-3">
            <Form.Label>{translations[language].email}</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="address" className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="phoneNumber" className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="district" className="mb-3">
            <Form.Label>{translations[language].selectDistrict}</Form.Label>
            <Form.Control
              as="select"
              value={district}
              onChange={handleDistrictChange}
              required
            >
              <option value="">Choose...</option>
              {districtsData.map((dist) => (
                <option key={dist.name} value={dist.name}>
                  {dist.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="taluka" className="mb-3">
            <Form.Label>{translations[language].selectTaluka}</Form.Label>
            <Form.Control
              as="select"
              value={taluka}
              onChange={(e) => setTaluka(e.target.value)}
              required
              disabled={!district}
            >
              <option value="">Choose...</option>
              {district &&
                districtsData
                  .find((dist) => dist.name === district)
                  .tahasil.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="branch" className="mb-3">
            <Form.Label>Engineering Branch</Form.Label>
            <Form.Control
              as="select"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              required
            >
              <option value="">Choose...</option>
              {engineeringBranches.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            {translations[language].submit}
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default RegisterForm;
