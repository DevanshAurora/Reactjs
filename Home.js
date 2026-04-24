import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("⚠️ All fields are required");
      setSuccess("");
      return;
    }

    if (!form.email.includes("@")) {
      setError("⚠️ Enter valid email");
      setSuccess("");
      return;
    }

    // simulate submission
    setSuccess("✅ Message sent successfully!");
    setError("");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="page">
      <h1>📞 Contact Us</h1>

      <p>Have feedback or suggestions? We'd love to hear from you!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        {success && <p style={{ color: "lightgreen" }}>{success}</p>}

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;