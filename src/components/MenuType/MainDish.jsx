import { PiBowlFood } from "react-icons/pi";
export default function MainDish() {
  return (
    <div className="flex items-center gap-2 p-1 border border-slate-400 rounded-md">
      <PiBowlFood />
      <p>Main Dish</p>
    </div>
  );
}
