import Link from "next/link";
import Button from "./Button";
const Navbar = () => {
  return (
    <nav className="w-full h-[10vh] flex justify-between px-8 py-5 items-center">
      <div className="flex gap-8">
        <div className="font-bold">MoviesPulse</div>
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
