import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import ErrorPage from "./ErrorPage.jsx";

export default function appRouter() {
    return createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
            errorElement: <ErrorPage />,
        },
    ]);
}
