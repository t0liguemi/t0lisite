import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./ui/components/navbar.tsx";
import Music from "./views/music.tsx";
import CoffeeMain from "./views/coffeeMain.tsx";
import Home from "./views/home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music/>} />
        <Route path="/coffee" element={<CoffeeMain/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
