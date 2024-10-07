const translations = {
  en: {
    title: "User Information Form",
    name: "Name",
    email: "Email",
    selectDistrict: "Select District",
    selectTaluka: "Select Taluka",
    submit: "Submit",
    alertMessage: (name, email, district, taluka) =>
      `Name: ${name}, Email: ${email}, District: ${district}, Taluka: ${taluka}`,
  },
  hi: {
    title: "उपयोगकर्ता जानकारी फॉर्म",
    name: "नाम",
    email: "ईमेल",
    selectDistrict: "जिला चुनें",
    selectTaluka: "तालुका चुनें",
    submit: "जमा करें",
    alertMessage: (name, email, district, taluka) =>
      `नाम: ${name}, ईमेल: ${email}, जिला: ${district}, तालुका: ${taluka}`,
  },
  mr: {
    title: "वापरकर्त्याची माहिती फॉर्म",
    name: "नाव",
    email: "ईमेल",
    selectDistrict: "जिल्हा निवडा",
    selectTaluka: "तालुका निवडा",
    submit: "सादर करा",
    alertMessage: (name, email, district, taluka) =>
      `नाव: ${name}, ईमेल: ${email}, जिल्हा: ${district}, तालुका: ${taluka}`,
  },
};

export default translations;
