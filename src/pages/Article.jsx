import { getPost } from "../data/posts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Article() {
  const params = useParams();

  const [post, setPost] = useState({
    title: "Loading...",
    content: "Loading...",
  });
  useEffect(() => {
    getPost(params.postslug).then((data) => {
      setPost(data.data[0]);
    });
  }, []);

  return (
    <>
      <h1 className="text-3xl font-semibold text-artictle">{post.title}</h1>
      <div
        className="text-artictle text-opacity-90"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </>
  );
}
