import { getAboutMe } from "../data/common";
import { useEffect, useState } from "react";
import "./WYSIWYG.css";

export default function AboutMe() {
  const [aboutMe, setAboutMe] = useState({ content: "Loading..." });
  useEffect(() => {
    getAboutMe().then((data) => {
      setAboutMe(data.data);
    });
  }, []);

  return (
    <>
      <div className="">
        <img
          className="w-full rounded-xl shadow-md"
          src={process.env.REACT_APP_ASSETS_PREFIX + aboutMe.banner}
          alt=""
        />
      </div>
      <h1 className="text-3xl font-semibold text-aboutme mt-3">About Me</h1>
      <div
        className="text-aboutme text-opacity-90 pb-24 wysiwyg"
        dangerouslySetInnerHTML={{ __html: aboutMe.content }}
      ></div>
    </>
  );
}
