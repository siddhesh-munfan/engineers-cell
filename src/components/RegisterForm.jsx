import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import translations from "./translations";
import districtsData from "./districtsData.json";
import PropTypes from "prop-types";
import def_prof from '../assets/user.png';

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

  // const handlePhotoChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPhoto(reader.result); // Set the uploaded photo as the state
  //     };
  //     reader.readAsDataURL(file); // Read the file as a data URL
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${name}\nEmail: ${email}\nAddress: ${address}\nPhone: ${phoneNumber}\nDistrict: ${district}\nTaluka: ${taluka}\nBranch: ${branch}\nMessage: ${message}`
    );
  };

  return (
    <Container className="mt-2">

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
            src={def_prof}
            alt="Dummy"
            className="rounded-circle"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        )}
      </div>

      <Form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-4 mb-2"> {/* Added margin-bottom */}
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div className="col-md-4 mb-2"> {/* Added margin-bottom */}
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div> 
          <div className="col-md-4 mb-2"> {/* Added margin-bottom */}
            <Form.Control
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone"
              required
            />
          </div>
        </div>

        <Form.Group controlId="address" className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Enter your address"
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>
        
        <div className="row mb-3">
          <div className="col-md-4 mb-2"> {/* Added margin-bottom */}
            <Form.Group controlId="district">
              <Form.Control
                as="select"
                value={district}
                onChange={handleDistrictChange}
                required
              >
                <option value="">{translations[language].selectDistrict}</option>
                {districtsData.map((dist) => (
                  <option key={dist.name} value={dist.name}>{dist.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>
          <div className="col-md-4 mb-2"> {/* Added margin-bottom */}
            <Form.Group controlId="taluka">
              <Form.Control
                as="select"
                value={taluka}
                onChange={(e) => setTaluka(e.target.value)}
                required
                disabled={!district}
              >
                <option value="">Select Taluka</option>
                {district && districtsData.find((dist) => dist.name === district).tahasil.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>
          <div className="col-md-4 mb-2"> {/* Added margin-bottom */}
            <Form.Group controlId="branch">
              <Form.Control
                as="select"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                required
              >
                <option value="">{translations[language].selectBranch}</option>
                {engineeringBranches.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </div>
        </div>

        <Form.Group controlId="message" className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Enter your message"
            rows={5}
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
  );
};

RegisterForm.propTypes = {
  language: PropTypes.string,
};

export default RegisterForm;