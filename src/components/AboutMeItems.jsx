export function AboutMeItems({ items, type }) {
  return (
    <>
      <div className="-mx-4 flex flex-wrap justify-center">
        {items.map((item) => (
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mx-auto mb-10 max-w-[370px]">
              <div className="mb-8 overflow-hidden rounded">
                <img
                  src={process.env.REACT_APP_ASSETS_PREFIX + item.thumbnail?.id}
                  alt=""
                  className="w-full"
                />
              </div>
              <div>
                <h3>
                  <a
                    href={"/" + type + "/" + item.slug}
                    className="text-dark text-opacity-80 hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                    alt=""
                  >
                    {item.name}
                  </a>
                </h3>
                <p className="text-body-color text-base">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
