import "./Nav.css";

export default function Nav() {
  return (
    <div class="nav">
      {/* nav left */}
      <div class="navLeft">
        <a href="/" class="navItem">
          <span>Homepage</span>
        </a>
        <a href="/portfolio.html" class="navItem">
          <span>About me</span>
          {/* <span class="rightText secondary">xxxxxx</span> */}
        </a>
        <button class="navItem">
          <span>Blog</span>
          {/* <span class="rightText secondary">3+</span> */}
        </button>
      </div>
      {/* nav right*/}
      <div class="navRight">
        {/* icon-park-solid:youtube */}
        <a
          href="https://www.youtube.com/@sdkaraarslan"
          target="_blank"
          class="socialIcon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            height="2.5em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48"
          >
            <rect
              x="0"
              y="0"
              width="48"
              height="48"
              fill="none"
              stroke="none"
            />
            <mask id="ipSYoutube0">
              <g fill="none" stroke-linejoin="round">
                <path
                  fill="#fff"
                  stroke="#fff"
                  stroke-width="4"
                  d="M11.064 10.414c5.543-.276 9.854-.414 12.934-.414s7.393.138 12.939.415a6 6 0 0 1 5.68 5.492c.254 3.034.381 5.706.381 8.017c0 2.339-.13 5.048-.39 8.128a6 6 0 0 1-5.587 5.483c-4.741.31-9.082.465-13.023.465c-3.94 0-8.28-.155-13.018-.465a6 6 0 0 1-5.587-5.48c-.263-3.103-.395-5.814-.395-8.131c0-2.29.129-4.963.385-8.02a6 6 0 0 1 5.68-5.49Z"
                />
                <path
                  fill="#000"
                  stroke="#000"
                  stroke-width="3.429"
                  d="M21 19.61v8.796a.857.857 0 0 0 1.33.715l6.597-4.36a.857.857 0 0 0 .006-1.427l-6.598-4.436a.857.857 0 0 0-1.335.711Z"
                />
              </g>
            </mask>
            <path
              fill="currentColor"
              d="M0 0h48v48H0z"
              mask="url(#ipSYoutube0)"
            />
          </svg>
        </a>
        <a
          href="https://github.com/sdkaraarslan"
          target="_blank"
          class="socialIcon"
        >
          {/* icon-park:github */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.1em"
            height="2.1em"
            fill="white"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48"
          >
            <rect
              x="0"
              y="0"
              width="48"
              height="48"
              fill="none"
              stroke="none"
            />
            <g fill-rule="evenodd" clip-rule="evenodd">
              <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" />
              <path d="M19.1833 45.4716C18.9898 45.2219 18.9898 42.9973 19.1833 38.798C17.1114 38.8696 15.8024 38.7258 15.2563 38.3667C14.437 37.828 13.6169 36.1667 12.8891 34.9959C12.1614 33.8251 10.5463 33.64 9.89405 33.3783C9.24182 33.1165 9.07809 32.0496 11.6913 32.8565C14.3044 33.6634 14.4319 35.8607 15.2563 36.3745C16.0806 36.8883 18.0515 36.6635 18.9448 36.2519C19.8382 35.8403 19.7724 34.3078 19.9317 33.7007C20.1331 33.134 19.4233 33.0083 19.4077 33.0037C18.5355 33.0037 13.9539 32.0073 12.6955 27.5706C11.437 23.134 13.0581 20.2341 13.9229 18.9875C14.4995 18.1564 14.4485 16.3852 13.7699 13.6737C16.2335 13.3589 18.1347 14.1343 19.4734 16.0001C19.4747 16.0108 21.2285 14.9572 24.0003 14.9572C26.772 14.9572 27.7553 15.8154 28.5142 16.0001C29.2731 16.1848 29.88 12.7341 34.5668 13.6737C33.5883 15.5969 32.7689 18.0001 33.3943 18.9875C34.0198 19.9749 36.4745 23.1147 34.9666 27.5706C33.9614 30.5413 31.9853 32.3523 29.0384 33.0037C28.7005 33.1115 28.5315 33.2855 28.5315 33.5255C28.5315 33.8856 28.9884 33.9249 29.6465 35.6117C30.0853 36.7362 30.117 39.948 29.7416 45.247C28.7906 45.4891 28.0508 45.6516 27.5221 45.7347C26.5847 45.882 25.5669 45.9646 24.5669 45.9965C23.5669 46.0284 23.2196 46.0248 21.837 45.8961C20.9154 45.8103 20.0308 45.6688 19.1833 45.4716Z" />
            </g>
          </svg>
        </a>
        {/* uil:linkedin */}
        <a
          href="https://www.linkedin.com/in/sdkaraarslan/"
          target="_blank"
          class="socialIcon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.4em"
            height="2.4em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <rect
              x="0"
              y="0"
              width="24"
              height="24"
              fill="none"
              stroke="none"
            />
            <path
              fill="currentColor"
              d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12a1.57 1.57 0 1 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"
            />
          </svg>
        </a>
        <a
          href="https://stackoverflow.com/users/9705361/sdkaraarslan"
          target="_blank"
          class="socialIcon"
        >
          {/* mdi:stackoverflow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.4em"
            height="2.4em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <rect
              x="0"
              y="0"
              width="24"
              height="24"
              fill="none"
              stroke="none"
            />
            <path
              fill="currentColor"
              d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38h12.56M6.77 14.32l.37-1.76l8.79 1.85l-.37 1.76l-8.79-1.85m1.16-4.21l.76-1.61l8.14 3.78l-.76 1.62l-8.14-3.79m2.26-3.99l1.15-1.38l6.9 5.76l-1.15 1.37l-6.9-5.75m4.45-4.25L20 9.08l-1.44 1.07l-5.36-7.21l1.44-1.07M6.59 18.41v-1.8h8.98v1.8H6.59Z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
