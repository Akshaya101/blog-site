import "./css/Blog.css";
function Blog(props) {
  const date = new Date().toLocaleString("default", { month: "short" });
  const year = new Date().getFullYear();
  return (
    <div className="blog">
      <a href="/blog">
        <img src={props.src} alt="coffee" />
      </a>
      <p>{`${date}, ${year}`}</p>
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
    </div>
  );
}
export default Blog;
//image
//date
//text
//from
