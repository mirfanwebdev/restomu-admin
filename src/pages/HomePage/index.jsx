import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Homepage() {
  return (
    <main className="flex">
      <Sidebar />
      <section className="w-full">
        <Navbar />
        <Outlet />
      </section>
    </main>
  );
}
