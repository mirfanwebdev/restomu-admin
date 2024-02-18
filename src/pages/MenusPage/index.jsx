import { useOutletContext } from "react-router-dom";
import ListMenu from "./ListMenu";
export default function MenusPage() {
  const style = useOutletContext();
  return (
    <div className={style}>
      <div>menu filter</div>
      <div>add menu</div>
      <ListMenu />
      <div>pagination</div>
    </div>
  );
}
