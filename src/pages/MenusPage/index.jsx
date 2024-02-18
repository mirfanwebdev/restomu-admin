import { useOutletContext, Outlet } from "react-router-dom";
import FilterButtons from "./FilterButtons";
// import ListMenu from "./ListMenu";
export default function MenusPage() {
  const style = useOutletContext();
  return (
    <div className={style}>
      <FilterButtons />
      <Outlet />
      <div>pagination</div>
    </div>
  );
}
