import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import router from "@routes/index.jsx";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position={"bottom-right"} />
  </React.StrictMode>,
);
