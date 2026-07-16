import React from "react";

export default function Contact() {

  const submit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    try {
      await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      // ✅ Show alert
      alert("Message saved✅");

      // ✅ Clear form AFTER clicking OK
      form.reset();

    } catch (error) {
      console.error(error);
      alert("Error saving message ❌");
    }
  };

  return (
    <div className="section" id="contact">

      <h1 className="section-title">Contact Me</h1>

      <p className="contact-info">📧 priyadharshiniofficial23@gmail.com</p>
      <p className="contact-info">📞 8220843942</p>

      <form onSubmit={submit} className="contact-form">

        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />

        <button type="submit">Send</button>

      </form>

    </div>
  );
}