import TagItem from "./TagItem";

export default function TagSelector({ items }) {
  return (
    <>
      <div className="flex gap-2">
        {items.map((item, index) => (
          <TagItem name={item.name} link={item.link} key={index} />
        ))}
      </div>
    </>
  );
}
