import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CalculadoraApp } from "./CalculadoraApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CalculadoraApp />
  </StrictMode>,
);
