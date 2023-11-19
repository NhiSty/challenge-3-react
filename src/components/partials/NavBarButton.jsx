import { LayoutDashboard, LogIn, LogOut, User, UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toTranslate from "@/utils/translate.js";

export function NavBarButtons() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const isConnected = localStorage.getItem("token");

  if (isConnected !== null) {
    return (
      <div className="dropdown dropdown-end">
        <button type="button" role="menu" tabIndex={0}>
          <User aria-hidden="true" />
          <span className="sr-only">{toTranslate("Compte")}</span>
        </button>

        <ul role="menu" className="dropdown-content menu menu-md">
          <li role="menuitem">
            <Link
              to="/account"
              className="hover:bg-primary hover:text-text-100"
            >
              {toTranslate("Compte")}
              <User aria-hidden="true" className="w-5 h-5 ml-auto" />
            </Link>
          </li>

          <li role="menuitem">
            <Link
              to="/dashboard"
              className="hover:bg-primary hover:text-text-100"
            >
              {toTranslate("Dashboard")}
              <LayoutDashboard aria-hidden="true" className="w-5 h-5 ml-auto" />
            </Link>
          </li>

          <li role="menuitem">
            <button
              onClick={handleLogout}
              className="hover:bg-primary hover:text-text-100"
            >
              {toTranslate("Déconnexion")}
              <LogOut aria-hidden="true" className="w-5 h-5 ml-auto" />
            </button>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <>
      <div className="tooltip tooltip-bottom" data-tip="Log In">
        <Link to="/login" className="btn btn-ghost">
          <LogIn aria-hidden="true" />
          <span className="sr-only">{toTranslate("Se connecter")}</span>
        </Link>
      </div>
      <div className="tooltip tooltip-bottom" data-tip="Register">
        <Link to="/register" className="btn btn-ghost">
          <UserPlus aria-hidden="true" />
          <span className="sr-only">{toTranslate("Se déconnecter")}</span>
        </Link>
      </div>
    </>
  );
}
