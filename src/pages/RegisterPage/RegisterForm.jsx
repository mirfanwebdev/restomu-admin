import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  postRegisterForm,
  clear,
} from "../../redux/features/register/registerSlice";
import { postAuthForm } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
  });

  const formItems = [
    {
      label: "Name:",
      name: "name",
      type: "text",
    },
    {
      label: "Username:",
      name: "username",
      type: "text",
    },
    {
      label: "Password:",
      name: "password",
      type: "password",
    },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    dispatch(clear());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: form.name,
      username: form.username,
      password: form.password,
      roleId: 1,
    };
    dispatch(postRegisterForm(payload)).then(() => {
      const loginPayload = {
        username: payload.username,
        password: payload.password,
      };
      dispatch(postAuthForm(loginPayload)).then(() => {
        navigate("/");
      });
    });
  };

  return (
    <form className="flex flex-col gap-2">
      {formItems.map((item) => (
        <div className="flex flex-col gap-1" key={item.name}>
          <label htmlFor={item.name}>{item.label}</label>
          <input
            type={item.type}
            onChange={handleChange}
            name={item.name}
            id={item.name}
            className="border py-2 px-3 rounded-md text-sm mb-3"
          />
        </div>
      ))}
      <div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="border-2 rounded w-full py-1"
        >
          Register
        </button>
      </div>
    </form>
  );
}
