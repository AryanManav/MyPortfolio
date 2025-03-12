import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!formData.email.trim()) newErrors.email = "Email is required!";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email!";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty!";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>

        <div className="contact-info">
          <a href="mailto:aryanmanav6@gmail.com" className="contact-item">
            <FaEnvelope className="icon" /> aryanmanav6@gmail.com
          </a>

          <a href="tel:+917011874366" className="contact-item">
            <FaPhone className="icon" /> +91-7011874366
          </a>

          <a href="https://www.linkedin.com/in/aryanmanav/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaLinkedin className="icon" /> LinkedIn
          </a>

          <a href="https://github.com/AryanManav" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaGithub className="icon" /> GitHub
          </a>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <small className="error">{errors.name}</small>}
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>

          <div className="input-group">
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <small className="error">{errors.message}</small>}
          </div>

          <button type="submit" className="btn">Send Message</button>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
