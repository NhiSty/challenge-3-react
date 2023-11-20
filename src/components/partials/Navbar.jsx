import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { NavBarButtons } from "@components/partials/NavBarButton.jsx";

const links = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Planning",
    to: "/planning",
  },
  {
    text: "Dashboard",
    to: "/dashboard",
  },
];

export function Navbar() {
  const isConnected = localStorage.getItem("token");

  return (
    <nav className="sticky top-0 border-b border-purple-300 bg-purple-400/[0.55] z-10 backdrop-blur-sm">
      <div className="navbar container mx-auto py-3">
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <button
              type="button"
              role="menu"
              tabIndex={0}
              title="Menu"
              className="btn btn-ghost"
            >
              <MenuIcon className="w-6 h-6" />
            </button>

            <ul
              role="menu"
              tabIndex={0}
              className="dropdown-content menu menu-md"
            >
              {links.map(
                (link) =>
                  isConnected && (
                    <li role="menuitem" key={link.to}>
                      <Link
                        to={link.to}
                        className="hover:bg-primary-500 hover:text-text-100"
                        exact-active-classname="text-primary"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ),
              )}
            </ul>
          </div>
        </div>

        <div className="navbar-center lg:navbar-start gap-2">
          <Link className="lg:btn lg:btn-ghost" to={"/"}>
            Rent-A-Dream
          </Link>

          {isConnected &&
            links.map((link) => (
              <Link
                className="hidden lg:btn lg:btn-ghost"
                key={link.to}
                exact-active-classname="text-primary"
                to={link.to}
              >
                {link.text}
              </Link>
            ))}
        </div>

        <div className="navbar-end lg:mr-2">
          <NavBarButtons />
        </div>
      </div>
    </nav>
  );
}
