import "./css/Contact.css";
function Contact() {
  return (
    <div className="container contact">
      <h3>Contact Form</h3>
      <form
        action="mailto:chanchala9119@gmail.com"
        method="GET"
        enctype="text/plain"
        name="Form_Details"
      >
        <div class="form-group">
          <label for="username">Username</label>
          <div class="row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
                name="first_name"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Last Name"
                name="last_name"
              />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="user@email.com"
            name="email"
          />
        </div>
        <div class="form-group">
          <label>Write your query</label>
          <textarea
            class="form-control"
            rows="3"
            placeholder="Query..."
            name="query"
          ></textarea>
        </div>
        <button type="submit" class="btn" value="send">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Contact;
