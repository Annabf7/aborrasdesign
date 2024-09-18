import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h2 className="contact-title">Explain to me your project!</h2>
        <form className="contact-form">
          <input type="text" name="name" placeholder="Name..." required />
          <input type="email" name="email" placeholder="Email address..." required />
          <textarea name="project" placeholder="Tell me more about your project..." required />
          <button type="submit">I will contact you right away!</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
