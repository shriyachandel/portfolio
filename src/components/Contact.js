import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./css/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <p>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>

      <div className="contact-content">
        {/* LEFT SIDE - INFO & LINKS */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            Feel free to reach out through email or connect on my professional profiles below.
          </p>
          <div className="contact-links">
            <a href="mailto:shriyachandel1998@gmail.com" target="_blank" rel="noreferrer">
              <FaEnvelope /> shriyachandel1998@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/shriya-chandel-521b27206/" target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/shriyachandel" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
         <input type="tel" placeholder="Your Phone Number" pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number"
                required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
