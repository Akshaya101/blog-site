import "./css/Footer.css";
function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer id="footer">
      <div class="container">
        <h3>Let's Get In Touch!</h3>
        <hr class="divider" />
        <div class="row">
          <div class="col-lg-4 col-md-4">
            <a href="https://www.instagram.com/">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          <div class="col-lg-4 col-md-4">
            <a href="https://www.twitter.com/">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
          <div class="col-lg-4 col-md-4">
            <a href="https://www.gmail.com/">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <h6>&copy; {date} owned by COFFEE AND WORK. All Rights Reserved.</h6>
      </div>
    </footer>
  );
}
export default Footer;
