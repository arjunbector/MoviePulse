import Link from "next/link";
import Button from "./Button";
const Navbar = () => {
  return (
    <nav className="w-full h-[10vh] flex justify-between px-8 py-5 items-center bg-[#0F0F0F] text-white">
      <div className="flex gap-8">
        <div className="font-bold "><span className="text-[#FF0000]">Movies</span><span>Pulse</span></div>
        <div className="flex gap-5">
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Search</Link>
            <Link href={"#"}>Latest</Link>
        </div>
      </div>
      <div>
        <Button text={"Login"}/>
      </div>
    </nav>
  );
};

export default Navbar;
