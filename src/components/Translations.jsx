// src/translations.js
const translations = {
  en: {
    navbarTitle: "Engineers Cell",
    selectLanguage: "Select Language",
    title: "User Information Form",
    uploadPhoto: "Upload Photo",
    name: "Name",
    email: "Email",
    address: "Address",
    phoneNumber: "Phone Number",
    selectDistrict: "Select District",
    selectTaluka: "Select Taluka",
    selectBranch: "Select Engineering Branch",
    message: "Message",
    submit: "Submit",
    alertMessage: (
      name,
      email,
      address,
      phoneNumber,
      district,
      taluka,
      branch,
      message
    ) =>
      `Name: ${name}, Email: ${email}, Address: ${address}, Phone Number: ${phoneNumber}, District: ${district}, Taluka: ${taluka}, Branch: ${branch}, Message: ${message}`,
  },
  hi: {
    navbarTitle: "इंजीनियर्स सेल",
    selectLanguage: "भाषा चुनें",
    title: "उपयोगकर्ता जानकारी फॉर्म",
    uploadPhoto: "फोटो अपलोड करें",
    name: "नाम",
    email: "ईमेल",
    address: "पता",
    phoneNumber: "फोन नंबर",
    selectDistrict: "जिला चुनें",
    selectTaluka: "तालुका चुनें",
    selectBranch: "इंजीनियरिंग शाखा चुनें",
    message: "संदेश",
    submit: "जमा करें",
    alertMessage: (
      name,
      email,
      address,
      phoneNumber,
      district,
      taluka,
      branch,
      message
    ) =>
      `नाम:${name}, ईमेल:${email}, पता:${address}, फोन नंबर:${phoneNumber}, जिला:${district}, तालुका:${taluka}, शाखा:${branch}, संदेश:${message}`,
  },
  mr: {
    navbarTitle: "इंजीनियर्स सेल",
    selectLanguage: "भाषा निवडा",
    title: "वापरकर्त्याचा माहिती फॉर्म",
    uploadPhoto: "फोटो अपलोड करा",
    name: "नाव",
    email: "ईमेल",
    address: "पत्ता",
    phoneNumber: "फोन नंबर",
    selectDistrict: "जिल्हा निवडा",
    selectTaluka: "तालुका निवडा",
    selectBranch: "इंजीनियरिंग शाखा निवडा",
    message: "संदेश",
    submit: "सादर करा",
    alertMessage: (
      name,
      email,
      address,
      phoneNumber,
      district,
      taluka,
      branch,
      message
    ) =>
      `नाव:${name}, ईमेल:${email}, पत्ता:${address}, फोन नंबर:${phoneNumber}, जिल्हा:${district}, तालुका:${taluka}, शाखा:${branch}, संदेश:${message}`,
  },
};

export default translations;
