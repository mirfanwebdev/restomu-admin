import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Homepage() {
  const childrenStyle = "bg-slate-100 h-screen px-8 py-4";
  return (
    <main className="flex">
      <Sidebar />
      <section className="w-full">
        <Navbar />
        <Outlet context={childrenStyle} />
      </section>
    </main>
  );
}
