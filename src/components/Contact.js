import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./css/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://script.google.com/macros/s/AKfycbx9jlci94pcZE9dRS-Iv23pHCSsBenIsrA9cEe-a7YZCLxm6aJBHC3lzhsSzVYE5LiI/exec", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          alert("✅ Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
          alert("⚠️ Failed to send message. Try again.");
        }
      })
      .catch(() => alert("❌ Something went wrong."));
  };

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
