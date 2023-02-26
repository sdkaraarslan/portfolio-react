import { getPosts } from "../data/posts";

export default function Blog() {
  const posts = getPosts();

  return (
    <>
      <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div class="container mx-auto">
          <div class="-mx-4 flex flex-wrap justify-center">
            <div class="w-full px-4">
              <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span class="text-primary mb-2 block text-lg font-semibold">
                  Our Blogs
                </span>
                <h2 class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p class="text-body-color text-base">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
            {posts.map((post) => (
              <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                <div class="mx-auto mb-10 max-w-[370px]">
                  <div class="mb-8 overflow-hidden rounded">
                    <img
                      src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg"
                      alt="image"
                      class="w-full"
                    />
                  </div>
                  <div>
                    <span class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                      {new Date(post.date).toDateString()}
                    </span>
                    <h3>
                      <a
                        href="javascript:void(0)"
                        class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                      >
                        {post.title}
                      </a>
                    </h3>
                    <p class="text-body-color text-base">{post.description}</p>
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
