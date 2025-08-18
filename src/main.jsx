import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./Pages/Projects.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Testimonial from "./Pages/Testimonial.jsx";
import Resume from "./Pages/Resume.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/my-website">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<HomePage />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Testimonial" element={<Testimonial />} />
          <Route path="Resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
