// entry.tsx
// import "core-js";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("app") ?? document.body;
const root = createRoot(rootElement);
root.render(<App />);
