import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (event) => {
    event.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("porfavor introduce tu nombre y contraseña");
      return;
    }

    console.log(email);
    console.log(password);
    const user = {
      email,
      password,
    };

    await axios
      .post("http://localhost:8080/user/sign-in", user)
      .then((response) => {
        console.log(response);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-white p-8 rounded-2xl shadow-md max-h-[650px] flex flex-col justify-center font-Nunito">
        <div className="text-center ">
          <div className="font-Roboto my-4">
            <h1 className="text-6xl font-bold  mx-8">Bienvenido </h1>
            <h3 className="text-xl font-semibold  mx-8">de nuevo a AstroMet</h3>
          </div>
          <form className="text-left">
            <div className="m-1">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                required
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
              />
            </div>
            <div className="m-1">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Contraseña:
              </label>
              <input
                required
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
              />
            </div>
            <div className="mt-8 w-full col-span-2 flex justify-center z-10">
              <div className="w-[400px]">
                <button
                  type="submit"
                  onClick={loginHandler}
                  className="relative flex w-full justify-center rounded-3xl bg-black  py-3 text-sm font-light text-white hover:bg-[#00CAC8] transition duration-300  mb-4 hover:scale-105"
                >
                  Iniciar Sesión
                </button>
              </div>
            </div>
            <div className="my-4 w-full col-span-2 flex justify-center font-bold z-10">
              <div className="flex items-center text-sm ">
                <label htmlFor="checkbox" className="text-[#979797]">
                  ¿No tienes una cuenta?
                </label>
                <span className="text-[#60CBD3] ml-2 cursor-pointer hover:text-[#34A5AD] duration-300">
                  <Link to={"/Register"}>Registrate</Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
