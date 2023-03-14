import ProfileColumn from "../components/ProfileColumn";
import CardItem from "../components/CardItem";
import { getPosts } from "../data/posts";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Home() {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts({ limit: 6 }).then((result) => {
      setPosts(result.data);
    });
  }, []);

  return (
    <>
      <ProfileColumn />
      {/* <div className="flex flex-row flex-wrap justify-start w-full gap-3 mt-3 max-w-[100vw]"> */}
      <Splide
        options={{
          breakpoints: {
            640: {
              perPage: 1,
            },
            800: {
              perPage: 2,
            },
            999999: {
              perPage: 3,
            },
          },
          gap: 10,
          pagination: false,
        }}
        className="mt-3"
        aria-label="Blog posts"
      >
        {posts.map((post) => (
          <SplideSlide className="flex flex-col items-center">
            <CardItem
              key={post.id.toString()}
              title={post.title}
              description={post.description}
              imageUrl={process.env.REACT_APP_ASSETS_PREFIX + post.thumbnail.id}
              link={"/blog/" + post.category.slug + "/" + post.slug}
            />
          </SplideSlide>
        ))}
      </Splide>
      {/* </div> */}
    </>
  );
}
