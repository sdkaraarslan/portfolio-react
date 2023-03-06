import { useState } from "react";
import { Icon } from "@iconify/react";
import "./Nav.css";

export default function Nav() {
  const [navItemsShown, setNavItemsShown] = useState(false);

  return (
    <div className="nav w-full">
      {/* nav left */}

      <div
        className={
          (navItemsShown ? "" : "hidden") +
          " navLeft md:flex absolute md:relative bg-bg left-0 md:left-0 top-20 w-full md:top-0"
        }
      >
        <a href="/" className="navItem">
          <span>Homepage</span>
        </a>
        <a href="/about-me" className="navItem">
          <span>About me</span>
          {/* <span class="rightText secondary">xxxxxx</span> */}
        </a>
        <a href="/blog" className="navItem">
          <span>Blog</span>
          {/* <span class="rightText secondary">3+</span> */}
        </a>
      </div>

      <button
        onClick={() => setNavItemsShown(!navItemsShown)}
        className="md:hidden ml-4"
      >
        <Icon icon="ic:round-menu" width="2.5em" />
      </button>

      {/* nav right*/}
      <div className="navRight">
        {/* icon-park-solid:youtube */}
        <a href="https://www.youtube.com/@sdkaraarslan" className="socialIcon">
          <Icon icon="icon-park-solid:youtube" width="2.5em" />
        </a>
        <a href="https://github.com/sdkaraarslan" className="socialIcon">
          {/* icon-park:github */}
          <Icon
            icon="icon-park:github"
            className="fill-primary"
            width="2.3em"
          />
        </a>
        {/* uil:linkedin */}
        <a
          href="https://www.linkedin.com/in/sdkaraarslan/"
          className="socialIcon"
        >
          <Icon icon="uil:linkedin" width="2.5em" />
        </a>
        <a
          href="https://stackoverflow.com/users/9705361/sdkaraarslan"
          className="socialIcon"
        >
          {/* mdi:stackoverflow */}
          <Icon icon="mdi:stackoverflow" width="2.5em" />
        </a>
      </div>
    </div>
  );
}
