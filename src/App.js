import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import ProfileColumn from "./ProfileColumn";
import CardItem from "./CardItem";
import { getPosts } from "./data/posts";
import { useState } from "react";

function App() {
  // const [posts, setPosts] = useState([]);

  return (
    <>
      <Nav />
      <div class="contentContainer">
        <ProfileColumn />
        <CardItem title="" description="" imageUrl="" />
      </div>
    </>
  );
}

export default App;
