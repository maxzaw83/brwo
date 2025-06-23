import { useState } from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product";
import { About_Us } from "./pages/About_Us";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { SingUp } from "./pages/SingUp";
import { Muslim_Aid } from "./pages/news/Muslim_Aid";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/About_Us" element={<About_Us />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/singup" element={<Muslim_Aid />} />
      </Routes>
    </>
  );
}

export default App;
