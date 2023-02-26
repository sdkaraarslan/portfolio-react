import { useState } from "react";
import { Icon } from "@iconify/react";
import "./Nav.css";

export default function Nav() {
  const [navItemsShown, setNavItemsShown] = useState(false);

  return (
    <div class="nav">
      {/* nav left */}

      <div
        className={
          (navItemsShown ? "" : "hidden") +
          " navLeft md:flex absolute md:relative bg-bg outline outline-primary md:outline-none rounded-lg left-1.5 md:left-0 top-20 md:top-0"
        }
      >
        <a href="/" class="navItem">
          <span>Homepage</span>
        </a>
        <a href="/about-me" class="navItem">
          <span>About me</span>
          {/* <span class="rightText secondary">xxxxxx</span> */}
        </a>
        <a href="/blog" class="navItem">
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
      <div class="navRight">
        {/* icon-park-solid:youtube */}
        <a
          href="https://www.youtube.com/@sdkaraarslan"
          target="_blank"
          class="socialIcon"
        >
          <Icon icon="icon-park-solid:youtube" width="2.5em" />
        </a>
        <a
          href="https://github.com/sdkaraarslan"
          target="_blank"
          class="socialIcon"
        >
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
          target="_blank"
          class="socialIcon"
        >
          <Icon icon="uil:linkedin" width="2.5em" />
        </a>
        <a
          href="https://stackoverflow.com/users/9705361/sdkaraarslan"
          target="_blank"
          class="socialIcon"
        >
          {/* mdi:stackoverflow */}
          <Icon icon="mdi:stackoverflow" width="2.5em" />
        </a>
      </div>
    </div>
  );
}
