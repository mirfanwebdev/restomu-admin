import { Link, NavLink } from "react-router-dom";
import Beverage from "../../components/MenuType/Beverage";
import MainDish from "../../components/MenuType/MainDish";
export default function FilterButtons() {
  const linkStyle =
    "flex items-center gap-2 p-1 border border-slate-400 rounded-md cursor-pointer";
  const activeSyle = "bg-slate-200";
  return (
    <div className="flex justify-between pb-4">
      <div className="flex gap-2">
        <NavLink to={"/menus/"}>
          <button className={linkStyle}>All</button>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeSyle : "")}
          to={"/menus/beverage"}
        >
          <Beverage />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeSyle : "")}
          to={"/menus/main-dish"}
        >
          <MainDish />
        </NavLink>
      </div>
      <Link className="border-slate-400 border rounded-md px-2 py-1">
        Add Menu +
      </Link>
    </div>
  );
}
