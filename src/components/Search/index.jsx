import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { fetchMenu } from "../../redux/features/menu/menuSlice";
import { useDispatch } from "react-redux";
export default function Search() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    const filter = {
      name: name,
      type: "",
    };
    dispatch(fetchMenu(filter));
  };
  return (
    <div>
      <label
        className="border rounded-xl px-3 py-1 border-slate-600 flex gap-3 items-center"
        htmlFor="search"
      >
        <BiSearch onClick={handleSubmit} />
        <input
          id="search"
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={name}
          placeholder="Search..."
        />
      </label>
    </div>
  );
}
