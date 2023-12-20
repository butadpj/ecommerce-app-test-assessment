export function CategoryFilter({
  label = "",
  isActive,
  onClick,
}: {
  label: string;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLLIElement> | undefined;
}) {
  return (
    <li
      onClick={onClick}
      className={`hover:bg-gray-300 hover:text-black px-5 py-2 cursor-pointer capitalize ${
        isActive ? "bg-green-500 hover:bg-green-400" : ""
      }`}
    >
      {label}
    </li>
  );
}
