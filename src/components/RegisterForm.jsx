import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showTutorFields, setShowTutorFields] = useState(false);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [address, setAddress] = useState("");
  const [regionOrState, setRegionOrState] = useState("");

  const [nameTutor, setNameTutor] = useState("");
  const [lastNameTutor, setLastNameTutor] = useState("");
  const [phoneNumberTutor, setPhoneNumberTutor] = useState("");
  const [emailTutor, setEmailTutor] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();

    if (
      name.trim() === "" ||
      lastName.trim() === "" ||
      password.trim() === "" ||
      phoneNumber.trim() === "" ||
      age === "" ||
      email.trim() === "" ||
      educationLevel === "" ||
      address.trim() === "" ||
      regionOrState.trim() === ""
    ) {
      alert("Faltan datos obligatorios del usuario.");
      return;
    }

    if (showTutorFields) {
      if (
        nameTutor.trim() === "" ||
        lastNameTutor.trim() === "" ||
        phoneNumberTutor.trim() === "" ||
        emailTutor.trim() === ""
      ) {
        alert("Faltan datos obligatorios del tutor.");
        return;
      }
    }

    const user = {
      name,
      lastName,
      password,
      phoneNumber,
      age,
      email,
      educationLevel,
      address,
      regionOrState,
      nameTutor,
      lastNameTutor,
      phoneNumberTutor,
      emailTutor,
    };

    axios
      .post(`http://localhost:8080/user/sing-up`, user)
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(
      name,
      lastName,
      password,
      phoneNumber,
      age,
      email,
      educationLevel,
      address,
      regionOrState,
      nameTutor,
      lastNameTutor,
      phoneNumberTutor,
      emailTutor
    );
  };

  const handleAgeChange = (event) => {
    const newAge = parseInt(event.target.value, 10);
    if (newAge >= 7) {
      setAge(newAge);
      setShowTutorFields(newAge < 18);
    } else {
      setAge(newAge);
      setShowTutorFields(false);
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
              htmlFor="nombre"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nombre:<span className="text-red-600">*</span>
            </label>
            <input
              required
              type="text"
              id="nombre"
              name="nombre"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full border-2 border-[#C9C9C9]  rounded py-1 px-3"
            />
          </div>
          <div className="m-1">
            <label
              htmlFor="lastName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Apellidos:<span className="text-red-600">*</span>
            </label>
            <input
              required
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
            />
          </div>
          <div className="m-1">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Contraseña:<span className="text-red-600">*</span>
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
          <div className="flex items-center">
            <div className="m-1">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Numero de telefono:<span className="text-red-600">*</span>
              </label>
              <input
                required
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
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
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Correo electronico:<span className="text-red-600">*</span>
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
            />
          </div>
          <div className="m-1 ">
            <label
              htmlFor="select"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nivel educativo:<span className="text-red-600">*</span>
            </label>
            <select
              name="select"
              className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
              value={educationLevel}
              onChange={(event) => setEducationLevel(event.target.value)}
            >
              <option value="Ninguna">Ninguna</option>
              <option value="Primaria">Primaria</option>
              <option value="Secundaria">Secundaria</option>
              <option value="Bachillerato">Bachillerato</option>
              <option value="Licenciatura">Licenciatura</option>
              <option value="Maestria">Maestria</option>
              <option value="Doctorado">Doctorado</option>
            </select>
          </div>
          <div className="m-1">
            <label
              htmlFor="address"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Domicilio:<span className="text-red-600">*</span>
            </label>
            <input
              required
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
            />
          </div>

          <div className="m-1">
            <label
              htmlFor="state"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Region o estado:<span className="text-red-600">*</span>
            </label>
            <input
              required
              type="text"
              id="state"
              name="state"
              value={regionOrState}
              onChange={(event) => setRegionOrState(event.target.value)}
              className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
            />
          </div>
          <div className="col-span-2" id="formTutor">
            <div
              className={`grid grid-cols-2 ${showTutorFields ? "" : "hidden"}`}
            >
              <div className="col-span-2">
                <h3 className="block font-bold text-base mt-4">
                  Si eres Menor de edad por favor llenar este apartado con los
                  datos de tu tutor.
                </h3>
              </div>
              <div className="m-1">
                <label
                  htmlFor="tutorName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Nombre del tutor:<span className="text-red-600">*</span>
                </label>
                <input
                  required
                  type="text"
                  id="tutorName"
                  name="tutorName"
                  value={nameTutor}
                  onChange={(event) => setNameTutor(event.target.value)}
                  className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
                />
              </div>
              <div className="m-1">
                <label
                  htmlFor="tutorLastName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Apellidos del tutor:
                  <span className="text-red-600">*</span>
                </label>
                <input
                  required
                  type="text"
                  id="tutorLastName"
                  name="tutorLastName"
                  value={lastNameTutor}
                  onChange={(event) => setLastNameTutor(event.target.value)}
                  className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
                />
              </div>
              <div className="m-1">
                <label
                  htmlFor="tutorPhoneNumber"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Numero de contacto del tutor:
                  <span className="text-red-600">*</span>
                </label>
                <input
                  required
                  type="tel"
                  id="tutorPhoneNumber"
                  name="tutorPhoneNumber"
                  value={phoneNumberTutor}
                  onChange={(event) => setPhoneNumberTutor(event.target.value)}
                  className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
                />
              </div>
              <div className="m-1">
                <label
                  htmlFor="tutorEmail"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Correo Electronico del Tutor:
                  <span className="text-red-600">*</span>
                </label>
                <input
                  required
                  type="email"
                  id="tutorEmail"
                  name="tutorEmail"
                  value={emailTutor}
                  onChange={(event) => setEmailTutor(event.target.value)}
                  className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
                />
              </div>
            </div>
          </div>
          <div className="my-2 w-full col-span-2 flex justify-center z-10">
            <div className="w-[400px]">
              <button
                type="submit"
                onClick={registerHandler}
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
