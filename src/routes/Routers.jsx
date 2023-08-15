import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contents from "../pages/Contents";
import Courses from "../pages/Courses";
import Login from "../pages/Login";
import Register from "../pages/Register";
export default function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contents" element={<Contents />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
