import "./css/Blogs.css";
import Blog from "./Blog";
import pic1 from "./images/coffee-1.jpg";
import pic2 from "./images/coffee-2.jpg";
import pic3 from "./images/coffee-3.jpg";
function Blogs() {
  return (
    <div className="blog">
      <div className="container">
        <h3>Blog</h3>
        <div className="row">
          <div className="col-lg-4">
            <Blog src={pic1} />
          </div>
          <div className="col-lg-4">
            <Blog src={pic2} />
          </div>
          <div className="col-lg-4">
            <Blog src={pic3} />
          </div>
          <div className="col-lg-4">
            <Blog src={pic1} />
          </div>
          <div className="col-lg-4">
            <Blog src={pic2} />
          </div>
          <div className="col-lg-4">
            <Blog src={pic3} />
          </div>
          <div className="col-lg-4">
            <Blog src={pic1} />
          </div>
          <div className="col-lg-4">
            <Blog src={pic2} />
          </div>
          <div className="col-lg-4">
            <Blog src={pic3} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blogs;
