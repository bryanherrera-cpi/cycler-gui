import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style.css";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
