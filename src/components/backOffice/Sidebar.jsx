import { LayoutDashboard, Building2, Users, BookOpenText } from "lucide-react";
import { Link } from "react-router-dom";
import toTranslate from "@/utils/translate";
// eslint-disable-next-line react/prop-types
export default function Sidebar({ children }) {
  return (
    <>
      <div className="drawer sm:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-base-200">{children}</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-64 min-h-full text-base-content">
            <li className="mb-5 font-semibold text-lg">
              <a href="/app/welcome">
                <img
                  className="mask mask-squircle w-7 h-7"
                  src="/vite.svg"
                  alt="DashWind Logo"
                />
                DashFinder
              </a>
            </li>

            <li className={"mb-2"}>
              <Link className="font-normal" to={"/manager/dashboard"}>
                <LayoutDashboard />
                {toTranslate("Dashboard")}
              </Link>
            </li>

            <li className={"mb-2"}>
              <Link className="font-normal" to={"/manager/company"}>
                <Building2 />
                {toTranslate("My company")}
              </Link>
            </li>

            <li className={"mb-2"}>
              <Link className="font-normal" to={"/manager/employees"}>
                <Users />
                {toTranslate("Employees")}
              </Link>
            </li>

            <li className={"mb-2"}>
              <Link className="font-normal" to={"/manager/services"}>
                <BookOpenText />
                {toTranslate("Service")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
