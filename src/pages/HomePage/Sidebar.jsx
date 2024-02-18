import { NavLink } from "react-router-dom";
import { BiFoodMenu } from "react-icons/bi";
import { BiHome } from "react-icons/bi";

export default function Sidebar() {
  const linkStyle = "flex items-center px-4 py-2 gap-2";
  const activeSyle = `${linkStyle} bg-slate-200 rounded-lg`;
  return (
    <div className="h-screen flex flex-col gap-10">
      <h1 className="text-xl pt-4 px-10 font-bold">RESTOKU</h1>
      <div className="flex flex-col gap-4 px-4">
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) => (isActive ? activeSyle : linkStyle)}
        >
          <BiHome />
          Home
        </NavLink>
        <NavLink
          to={"/menus"}
          className={({ isActive }) => (isActive ? activeSyle : linkStyle)}
        >
          <BiFoodMenu />
          Menus
        </NavLink>
      </div>
    </div>
  );
}
