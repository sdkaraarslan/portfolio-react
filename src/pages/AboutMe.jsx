import { getAboutMe } from "../data/common";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const [aboutMe, setAboutMe] = useState({ content: "Loading..." });
  useEffect(() => {
    getAboutMe().then((data) => {
      setAboutMe(data.data);
    });
  }, []);

  return (
    <>
      <h1 className="text-3xl font-semibold">About Me</h1>
      <div dangerouslySetInnerHTML={{ __html: aboutMe.content }}></div>
    </>
  );
}
