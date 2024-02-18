import { useOutletContext } from "react-router-dom";
export default function MenusPage() {
  const style = useOutletContext();
  return (
    <div className={style}>
      <div>menu filter</div>
      <div>add menu</div>
      <div>menu list</div>
      <div>pagination</div>
    </div>
  );
}
