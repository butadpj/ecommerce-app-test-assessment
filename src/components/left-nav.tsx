import { ReactElement } from "react";

export function LeftNav({ children }: { children: ReactElement }) {
  return (
    <div className="fixed h-[calc(100vh-68px)] overflow-y-auto bg-gray-500 text-white  py-10 w-full max-w-[13rem]">
      {children}
    </div>
  );
}
