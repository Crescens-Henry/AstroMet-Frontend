import React from "react";

export default function FormTutor({ showTutorFields }) {
  return (
    <div
      className={`grid grid-cols-2 ${
        showTutorFields
          ? "transition-all duration-300 ease-in-out opacity-100 max-h-[1000px]"
          : "transition-all duration-300 ease-in-out opacity-0 max-h-0"
      }`}
    >
      <div className="col-span-2">
        <h3 className="block font-bold text-base mt-4">
          Si eres Menor de edad por favor llenar este apartado con los datos de
          tu tutor.
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
          className="w-full border-2 border-[#C9C9C9] rounded py-1 px-3"
        />
      </div>
    </div>
  );
}
