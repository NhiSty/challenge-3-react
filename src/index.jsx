import { createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import App from "./App.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";
import LoginPage from "./routes/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;