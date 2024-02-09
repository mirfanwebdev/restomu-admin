import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postAuthForm } from "../../redux/features/auth/authSlice";

export default function LoginForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      username: form.username,
      password: form.password,
    };

    dispatch(postAuthForm(payload));
  };

  return (
    <section id="login-section" className="flex flex-col gap-4 justify-center">
      <h1 className="text-3xl font-bold">RESTOMU</h1>
      <form className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            onChange={handleChange}
            name="username"
            id="username"
            className="border"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            id="password"
            className="border"
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="border-2 rounded w-full py-1"
          >
            Login
          </button>
        </div>
      </form>
      <div>
        Don&apos;t have an account?{" "}
        <Link className="font-semibold" to="/register">
          Register
        </Link>{" "}
        to create one
      </div>
    </section>
  );
}
