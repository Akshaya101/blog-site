import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blogs from "./components/Blogs";
import Features from "./components/Features";
import Content from "./components/Content";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/blogs" element={<Blogs />}></Route>
          {/* <Route exact path="/content" element={<Content/>}></Route> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
