import ProfileColumn from "../components/ProfileColumn";
import CardItem from "../components/CardItem";
import { getPosts } from "../data/posts";
import { useEffect, useState } from "react";

export default function Home() {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((result) => {
      setPosts(result.data);
    });
  }, []);

  return (
    <>
      <ProfileColumn />
      <div className="flex flex-row flex-wrap justify-start w-full gap-3 mt-3 max-w-[100vw]">
        {posts.map((post) => (
          <CardItem
            key={post.id.toString()}
            title={post.title}
            description={post.description}
            imageUrl={process.env.REACT_APP_ASSETS_PREFIX + post.thumbnail.id}
            link={"/blog/" + post.category.slug + "/" + post.slug}
          />
        ))}
      </div>
    </>
  );
}
