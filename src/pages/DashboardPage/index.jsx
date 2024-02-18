import { useOutletContext } from "react-router-dom";
export default function DashboardPage() {
  const style = useOutletContext();
  return (
    <div className={style}>
      <h2>dashboard</h2>
      <div>sales linechart</div>
      <div>menus pie chart</div>
      <div>favourite menu</div>
      <div>last customer</div>
    </div>
  );
}
