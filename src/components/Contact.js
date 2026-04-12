export default function Contact() {

  const submit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value
      })
    })
    .then(res => res.text())
    .then(msg => alert(msg));
     e.target.reset();
  };

  return (
    <div className="section" id="contact">

      <h1 className="section-title">Contact Me</h1>

      <p className="contact-text">📧 priyadharshiniofficial23@gmail.com</p>
      <p className="contact-text">📞 8220843942</p>

      <form onSubmit={submit} className="contact-form">

        <input name="name" placeholder="Name" required />
        <input name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message"></textarea>

        <button>Submit</button>
        <br/><br/>

      </form>

    </div>
  );
}