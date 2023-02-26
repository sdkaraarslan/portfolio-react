import "./App.css";
import Nav from "./components/Nav/Nav";
import ProfileColumn from "./components/ProfileColumn";
import CardItem from "./components/CardItem";
import { getPosts } from "./data/posts";

function App() {
  const posts = getPosts();

  return (
    <>
      <Nav />
      <div class="contentContainer">
        <ProfileColumn />
        <div className="flex flex-row flex-wrap justify-start w-full gap-3 mt-3 max-w-[100vw]">
          {posts.map((post) => (
            <CardItem
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
