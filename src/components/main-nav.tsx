import { cn } from "@utils/cn";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "bg-gray-700 text-white fixed w-full flex items-center space-x-4 p-4 lg:space-x-6",
        className
      )}
      {...props}
    >
      <h1>Online Shopping Store</h1>
    </nav>
  );
}
