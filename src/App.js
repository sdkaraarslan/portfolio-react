import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import Article from "./pages/Article";

function App() {
  return (
    <>
      <Nav />
      <div className="contentContainer max-w-[75rem] w-full flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:category" element={<Blog />} />
          <Route path="/blog/:category/:postslug" element={<Article />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
