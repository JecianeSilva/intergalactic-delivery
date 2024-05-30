import { Planet } from "phosphor-react";
export function Header() {
  return (
    <header className="min-h-[70px] bg-blue-600 flex items-center px-4">
      <div className="flex max-w-7xl w-full mx-auto justify-between">
        <div className="flex">
          <Planet size={24} color="#FFFFFF" weight="fill" className="mr-4" />
          <h3 className="flex flex-1 font-bold uppercase text-white letter-lg">Delivery Intergaláctico</h3>
        </div>
      </div>
    </header>
  );
}