import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Contents from "../pages/Contents";
import Store from "../pages/Store";
import Courses from "../pages/Courses";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

export default function Routers() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Contents" element={<Contents />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
