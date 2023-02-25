export default function CardItem({ title, description, imageUrl }) {
  return (
    <div class="w-full flex mt-6">
      <div class="border-text border-2 overflow-hidden rounded-2xl pb-6 w-96 flex flex-col">
        <img className="aspect-auto" src={imageUrl} alt={title} />
        <h1 className="text-2xl mx-2 my-2">{title}</h1>
        <p className="text-md mx-2 my-2 text-ellipsis line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
