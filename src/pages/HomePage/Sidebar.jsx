import { Link } from "react-router-dom";
import { BiFoodMenu } from "react-icons/bi";
import { BiHome } from "react-icons/bi";

export default function Sidebar() {
  return (
    <div className="h-screen w-40 flex flex-col gap-4 border-2 border-zinc-200">
      <h1>RESTOKU</h1>
      <Link to={"/dashboard"} className="flex items-center gap-2">
        <BiHome />
        Home
      </Link>
      <Link className="flex items-center gap-2">
        <BiFoodMenu />
        Menus
      </Link>
    </div>
  );
}
