import "./css/Title.css";
function Title() {
  return (
    <div className="row title title-row">
      <div className="col-lg-12">
        <h1>COFFEE AND WORK.</h1>
        <hr className="divider" />
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="row button-row">
          <div className="col-lg-4 col-sm-4"></div>
          <a
            type="button"
            id="button-specifics"
            className="col-lg-4 col-sm-4 btn btn-outline-light button"
            href="/blog"
          >
            FIND OUT MORE!
          </a>
          <div className="col-lg-4 col-sm-4"></div>
        </div>
      </div>
    </div>
  );
}
export default Title;
