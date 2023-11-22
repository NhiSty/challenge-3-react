import { Outlet } from "react-router-dom";
import { Navbar } from "@components/partials/Navbar.jsx";
import "react-toastify/dist/ReactToastify.css";

function Layout() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
