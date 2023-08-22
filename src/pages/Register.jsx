import React from "react";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <>
      <div className="flex items-center justify-center h-screen text-black overflow-hidden bg-hero-pattern bg-cover z-40 relative">
        <RegisterForm />
      </div>
    </>
  );
}
