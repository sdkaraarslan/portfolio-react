import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Nav />
      <div class="contentContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/blog/travelling/1" element={<Article1 />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
