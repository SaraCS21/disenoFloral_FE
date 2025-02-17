import React from "react";
import Navbar from "../components/navbarComponents/Navbar";
import Footer from "../components/footerComponents/Footer";
import ContactForm from "../components/contactComponents/ContactForm";
import Header from "../components/Header";

import "../styles/contact.css";
import ContactData from "../components/contactComponents/ContactData";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <ContactData />
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;
