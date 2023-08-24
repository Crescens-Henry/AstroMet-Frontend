import React, { useState } from "react";
import FormTutor from "./FormTutor";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  const [age, setAge] = useState("");
  const [showTutorFields, setShowTutorFields] = useState(false);

  const handleAgeChange = (event) => {
    const newAge = parseInt(event.target.value, 10);
    if (newAge >= 7) {
      setAge(newAge);
      setShowTutorFields(newAge < 18);
    }
  };
  return (
    <>
      <div className="bg-white p-8 rounded-2xl shadow-md max-h-[650px] flex flex-col justify-center font-Nunito">
        <h1 className="font-Roboto text-4xl text-center mb-4 font-bold ">
          Registrate con AstroMet
        </h1>
        <form className="grid grid-cols-2">
          <div className="m-1">
            <label
              for="nombre"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nombre:<span className="text-red-600">*</span>
            </label>
            <input
              required
              type="text"
              id="nombre"
              name="nombre"
              className="w-full border-2 border-[#C9C9C9]  rounded py-1 px-3"
            />
          </div>
          <div className="m-1">
            <label
              for="lastName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Apellidos:<span className="text-red-600">*</span>
            </label>
            <input
              required
              type="text"
              id="lastName"
              name="lastName"
              className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
            />
          </div>
          <div className="m-1">
            <label
              for="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Contraseña:<span className="text-red-600">*</span>
            </label>
            <input
              required
              type="password"
              id="password"
              name="password"
              className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
            />
          </div>
          <div className="flex items-center">
            <div className="m-1">
              <label
                for="phoneNumber"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Numero de telefono:<span className="text-red-600">*</span>
              </label>
              <input
                required
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
              />
            </div>
            <div className="m-1">
              <label
                htmlFor="age"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Edad:<span className="text-red-600">*</span>
              </label>
              <input
                required
                type="number"
                id="age"
                name="age"
                value={age}
                onChange={handleAgeChange}
                className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
                min="7"
              />
            </div>
          </div>
          <div className="m-1">
            <label
              for="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Correo electronico:<span className="text-red-600">*</span>
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
            />
          </div>
          <div className="m-1 ">
            <label
              for="select"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nivel educativo:<span className="text-red-600">*</span>
            </label>
            <select
              name="select"
              className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
            >
              <option value="Primaria">Primaria</option>
              <option value="Secundaria">Secundaria</option>
              <option value="Bachillerato">Bachillerato</option>
              <option value="Licenciatura">Licenciatura</option>
              <option value="Maestria">Maestria</option>
              <option value="Doctorado">Doctorado</option>
              <option value="Ninguna" selected>
                Ninguna
              </option>
            </select>
          </div>
          <div className="m-1">
            <label
              for="address"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Domicilio:<span className="text-red-600">*</span>
            </label>
            <input
              required
              type="text"
              id="address"
              name="address"
              className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
            />
          </div>

          <div className="m-1">
            <label
              for="state"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Region o estado:<span className="text-red-600">*</span>
            </label>
            <input
              required
              type="text"
              id="state"
              name="state"
              className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
            />
          </div>
          <div className="col-span-2">
            <FormTutor showTutorFields={showTutorFields} />
          </div>
          <div className="my-2 w-full col-span-2 flex justify-center z-10">
            <div className="w-[400px]">
              <button
                type="submit"
                className="relative flex w-full justify-center rounded-3xl bg-black  py-3 text-sm font-light text-white hover:bg-[#00CAC8] transition duration-300  mb-4 hover:scale-105"
              >
                Registrar
              </button>
            </div>
          </div>
          <div className="mb-2 w-full col-span-2 flex justify-center font-bold z-10">
            <div className="flex items-center text-sm ">
              <label htmlFor="checkbox" className="text-[#979797]">
                ¿Ya tienes una cuenta?
              </label>
              <span className="text-[#60CBD3] ml-2 cursor-pointer hover:text-[#34A5AD] duration-300">
                <Link to={"/Login"}>Iniciar sesion</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
