import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./Pages/Projects.jsx";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import Resume from "./Pages/ResumePage/Resume.jsx";
import "./index.css";
import App from "./App.jsx";
import {pdfjs} from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

createRoot(document.getElementById("root")).render(
  
    <BrowserRouter basename="/my-website/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
);
