import { Link, NavLink } from "react-router-dom";
import Beverage from "../../components/MenuType/Beverage";
import MainDish from "../../components/MenuType/MainDish";
export default function FilterButtons() {
  const linkStyle =
    "flex items-center gap-2 p-1 border border-slate-400 rounded-md cursor-pointer";
  const activeSyle = `${linkStyle} font-bold`;
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <NavLink className={linkStyle} to={"/menus/"}>
          All
        </NavLink>
        <NavLink to={"/menus/beverage"}>
          <Beverage />
        </NavLink>
        <NavLink to={"/menus/main-dish"}>
          <MainDish />
        </NavLink>
      </div>
      <Link>Add Menu +</Link>
    </div>
  );
}
