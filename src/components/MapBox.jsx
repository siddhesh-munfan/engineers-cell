const MapBox = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15163.83819972304!2d74.60138659177247!3d18.16577723166194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc39ff91bbd5a8d%3A0xd7dc3e270d8c18ab!2sHotel%20Amardeep!5e0!3m2!1sen!2sin!4v1728384433322!5m2!1sen!2sin"
        width="100%"
        height="50%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default MapBox;
