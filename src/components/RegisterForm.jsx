// src/RegisterForm.jsx
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import translations from "./translations";
import districtsData from "./districtsData.json";
import PropTypes from "prop-types";
import def_prof from '../assets/user.png'

const engineeringBranches = [
  "Computer Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Electronics Engineering",
  "Information Technology",
  "AI&DS Engineering ",
];

const RegisterForm = ({ language }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [branch, setBranch] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
    setTaluka(""); // Reset taluka when district changes
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result); // Set the uploaded photo as the state
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${name}\nEmail: ${email}\nAddress: ${address}\nPhone: ${phoneNumber}\nDistrict: ${district}\nTaluka: ${taluka}\nBranch: ${branch}\nMessage: ${message}`
    );
  };

  return (
    <>
      <Container className="mt-2">
        <h4>{translations[language].title}</h4>

        {/* Image Preview */}
        <div className="text-center mb-3">
          {photo ? (
            <img
              src={photo}
              alt="Uploaded"
              className="rounded-circle"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          ) : (
            <img
              src={def_prof} // Replace with your dummy image path
              alt="Dummy"
              className="rounded-circle"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          )}
        </div>

        <Form onSubmit={handleSubmit} className="container">
          <Form.Group controlId="photo" className="mb-3 ">
            <Form.Label>{translations[language].uploadPhoto}</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              required
            />
          </Form.Group>

          {/* group 1 */}
          <div className=" row">
            <Form.Group controlId="name" className="mb-3 col">
              {/* <Form.Label>{translations[language].name}</Form.Label> */}
              <Form.Control
                type="text"
                placeholder = "Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3 col">
              {/* <Form.Label>{translations[language].email}</Form.Label> */}
              <Form.Control
                type="email"
                placeholder = "Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="phoneNumber" className="mb-3 col">
              {/* <Form.Label>{translations[language].phoneNumber}</Form.Label> */}
              <Form.Control
                type="tel"
                placeholder = "Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </Form.Group>
          </div>

          {/* end of group 1 */}
          <Form.Group controlId="address" className="mb-3 col">
              {/* <Form.Label>{translations[language].address}</Form.Label> */}
              <Form.Control
                type="text"
                placeholder = "Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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

            {/* Branch Selection Field */}
            <Form.Group controlId="branch" className="mb-3 col">
              {/* <Form.Label>{translations[language].selectBranch}</Form.Label> */}
              <Form.Control
                as="select"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                required
              >
                <option value="">Select engineering branch</option>
                {engineeringBranches.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>
            {/* Message Field */}
            <Form.Group controlId="message" className="mb-3 col">
              <Form.Label>{translations[language].message}</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </Form.Group>
          
          <Button variant="primary" type="submit">
            {translations[language].submit}
          </Button>
        </Form>
      </Container>
    </>
  );
};

RegisterForm.propTypes = {
  language: PropTypes.string,
};

export default RegisterForm;
