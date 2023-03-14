export default function CardItem({ title, description, imageUrl, link }) {
  return (
    <a
      href={link}
      style={{ height: "100%" }}
      className="flex flex-1 overflow-hidden rounded-2xl border-text border-2 min-w-[16rem] xl:min-w-[20rem] md:max-w-[20rem] xl:max-w-[24rem] transition-all duration-200 bg-bg hover:bg-white/50"
    >
      <div className="pb-6 flex flex-col">
        <img className="aspect-video" src={imageUrl} alt={title} />
        <h1 className="text-2xl mx-2 my-2">{title}</h1>
        <p className="text-md mx-2 my-2 text-ellipsis line-clamp-2">
          {description}
        </p>
      </div>
    </a>
  );
}
