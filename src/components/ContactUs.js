import Buttons from "./Buttons";

function ContactUs() {
  return (
    <section className="contact-us">
      <h1>Contact us</h1>
      <p>Got a question for us? we've got the answers.</p>
      <form>
        <label for="full-name">
          <span>Full Name</span>
          <input type="text" id="full-name"></input>
        </label>
        <label for="full-name">
          <span>How Can We Help You</span>
          <input type="text" id="full-name"></input>
        </label>
        <label for="full-name">
          <span>Email</span>
          <input type="text" id="full-name"></input>
        </label>
        <label for="full-name">
          <span>Comment</span>
          <input type="text" id="full-name"></input>
        </label>
      </form>
      <Buttons>Submit</Buttons>
    </section>
  );
}

export default ContactUs;
