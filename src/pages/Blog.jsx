import { getPosts } from "../data/posts";

export default function Blog() {
  const posts = getPosts();

  return (
    <>
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Blogs
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-body-color text-base">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
            {posts.map((post) => (
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mx-auto mb-10 max-w-[370px]">
                  <div className="mb-8 overflow-hidden rounded">
                    <img src="post.jpg" alt="" className="w-full" />
                  </div>
                  <div>
                    <span className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                      {new Date(post.date).toDateString()}
                    </span>
                    <h3>
                      <a
                        href={post.link ?? "#"}
                        className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
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
