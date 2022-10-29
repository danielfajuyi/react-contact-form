import React from "react";
import ContactContainer from "../Contact-Container/ContactContainer";
import ContactHeader from "../Contact-Header/ContactHeader";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <ContactHeader />
        <ContactContainer />
      </section>
    </>
  );
};

export default Contact;
