import Account from "../../components/Account";
import Search from "../../components/Search";
import { BiBell } from "react-icons/bi";
export default function Navbar() {
  return (
    <div className="flex items-center justify-between mx-8 my-4">
      <div>
        <Search />
      </div>
      <div className="flex gap-8 items-center">
        <BiBell className="text-2xl" />
        <Account />
      </div>
    </div>
  );
}
