import React from "react";
import LoginForm from "../components/LoginForm";
export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center h-screen text-black overflow-hidden bg-hero-pattern bg-cover">
        <LoginForm />
      </div>
    </>
  );
}
