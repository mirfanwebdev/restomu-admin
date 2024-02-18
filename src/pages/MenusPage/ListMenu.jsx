import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMenu } from "../../redux/features/menu/menuSlice";
export default function ListMenu() {
  const { menus } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMenu());
  }, []);
  return (
    <div className="grid grid-cols-3 gap-6">
      {menus.map((menu) => (
        <div
          className="flex border-slate-400 border-2 p-2 rounded-xl gap-3"
          key={menu.id}
        >
          <img
            className="w-28 h-28 object-cover rounded-xl"
            src={menu.imageUrl}
            alt={menu.name}
          />
          <div>
            <div>{menu.name}</div>
            {/* <div>{menu.description}</div> */}
            <div>{menu.priceFormatted}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
