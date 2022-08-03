import "./css/Articles.css";
import pic1 from "./images/coffee-1.jpg";
import pic2 from "./images/coffee-2.jpg";
import pic3 from "./images/coffee-3.jpg";
import Article from "./Article";
function Articles() {
  return (
    <div className="articles-section">
      <div className="container">
        <h3>LATEST ARTICLES</h3>
        <div className="row">
          <div className="col-lg-4">
            <Article src={pic1} />
          </div>
          <div className="col-lg-4">
            <Article src={pic2} />
          </div>
          <div className="col-lg-4">
            <Article src={pic3} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Articles;
