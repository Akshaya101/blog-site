import "./css/Features.css";
function Features() {
  return (
    <div id="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <i className="fas fa-code-branch"></i>
            <h4>Build Projects.</h4>
            <p>Get help to build what you love.</p>
          </div>
          <div className="col-lg-3 col-md-12">
            <i className="fas fa-hands-helping"></i>
            <h4>Ask for help.</h4>
            <p>Pave your way to become a programmer by taking expert advice.</p>
          </div>
          <div className="col-lg-3 col-md-12">
            <i className="fas fa-users"></i>
            <h4>Find Friends.</h4>
            <p>Get in touch with people, who share the same thought.</p>
          </div>
          <div className="col-lg-3 col-md-12">
            <i className="fas fa-heart"></i>
            <h4>Made with love.</h4>
            <p>This is who we are! Let's celebrate!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features;
