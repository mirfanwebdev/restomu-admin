import RegisterForm from "./RegisterForm";
import Messages from "../../components/messages";
import { useSelector } from "react-redux";

export default function RegisterPage() {
  const { message, error } = useSelector((state) => state.register);
  return (
    <main className="bg-gradient-to-r from-sky-300 to-indigo-300 h-screen flex flex-col gap-4 items-center justify-center">
      <Messages error={error} message={message} />
      <section
        id="register"
        className=" bg-slate-50 p-8 border-solid rounded-lg w-3/12"
      >
        <h2 className="text-2xl font-bold pb-4">RESTOMU</h2>
        <h1 className="text-2xl text-center font-bold pb-4">
          Create New Account
        </h1>
        <RegisterForm />
      </section>
    </main>
  );
}
