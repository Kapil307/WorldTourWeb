
function Contact() {
  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = Object.fromEntries
    (formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="section-contct">
      <h2 className="container-tittle">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input type="text"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your name"
            name="username" />

          <input type="email"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your email"
            name="email" />

          <textarea name="message"
            className="form-control"
            rows='10'
            placeholder="enter your message"
            required
            autoComplete="false"
          ></textarea>
          <button type="submit" value="send">Send</button>
        </form>
      </div>
    </section>
  )
}
export default Contact;