import React from "react";
import Navbar from "../components/navbarComponents/Navbar";
import Footer from "../components/footerComponents/Footer";
import ContactForm from "../components/contactComponents/ContactForm";

import "../styles/contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;
