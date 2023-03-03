export default function TagItem({ name, link }) {
  return (
    <>
      <a class="cursor-pointer" href={link}>
        <span class="border-body-color bg-stroke inline-block rounded border bg-opacity-5 py-1 px-2 text-sm font-semibold text-black">
          {name}
        </span>
      </a>
    </>
  );
}
