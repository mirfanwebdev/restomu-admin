import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postAuthForm } from "../../redux/features/auth/authSlice";
import Messages from "../../components/messages";

export default function LoginForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [validateError, setValidateError] = useState(null);
  const { isLoading, error, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setValidateError(null);
  };

  const handleSubmit = () => {
    if (!form.username || !form.password) {
      setValidateError("Please fill username and password");
      return;
    }
    const payload = {
      username: form.username,
      password: form.password,
    };
    dispatch(postAuthForm(payload)).then(() => navigate("/dashboard"));
    // navigate("/dashboard");
  };

  return (
    <section id="login-section" className="flex flex-col gap-4 justify-center">
      <Messages error={error || validateError} message={message} />
      <h1 className="text-3xl font-bold">RESTOMU</h1>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            onChange={handleChange}
            name="username"
            id="username"
            className="border py-2 px-3 rounded-md text-sm mb-3"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            id="password"
            className="border py-2 px-3 rounded-md text-sm mb-3"
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="border-2 rounded w-full py-1"
          >
            {isLoading ? "loading" : "Login"}
          </button>
        </div>
      </div>
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
