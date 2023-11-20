import { Outlet } from "react-router-dom";
import { Navbar } from "@components/partials/Navbar.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout() {
  return (
    <div>
      <Navbar />
      <ToastContainer position="bottom-right" />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
