import { getPosts } from "../data/posts";
import { slugify } from "../lib/slugify";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TagSelector from "../components/TagSelector/TagSelector";
import { getCategories } from "../data/common";

export default function Blog() {
  const params = useParams();

  let [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts({}).then((result) => {
      setPosts(result.data);
    });
  }, []);

  const [tagItems, setTagItems] = useState([]);
  useEffect(() => {
    getCategories().then((result) => {
      setTagItems(result.data);
    });
  }, []);

  return (
    <>
      <section className="pt-10 pb-10 lg:pt-[60px] lg:pb-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto mb-[30px] max-w-[510px] text-center lg:mb-10">
                <h2 className="text-dark text-opacity-80 mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  My Blogs
                </h2>
                <p className="text-body-color text-base">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
            <div className="w-full justify-center flex mb-8">
              <div>
                <TagSelector items={tagItems} />
              </div>
            </div>
            {posts.map((post) => (
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mx-auto mb-10 max-w-[370px]">
                  <div className="mb-8 overflow-hidden rounded">
                    <img
                      src={
                        process.env.REACT_APP_ASSETS_PREFIX + post.thumbnail.id
                      }
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div>
                    <span className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                      {new Date(post.date_created).toDateString()}
                    </span>
                    <h3>
                      <a
                        href={
                          "/blog/" +
                          slugify(post.category.name) +
                          "/" +
                          slugify(post.title)
                        }
                        className="text-dark text-opacity-80 hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                        alt=""
                      >
                        {post.title}
                      </a>
                    </h3>
                    <p className="text-body-color text-base">
                      {post.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
