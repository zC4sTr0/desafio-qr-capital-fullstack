import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/home/index.js";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<HomePage />);
