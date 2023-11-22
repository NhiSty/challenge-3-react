import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "@components/backOffice/Sidebar";
import BackOfficeNavbar from "@components/backOffice/BackOfficeNavbar";

function BackOfficeLayout() {
  return (
    <Sidebar>
      <BackOfficeNavbar />
      <main className={"px-8 py-8"}>
        <Outlet />
      </main>
    </Sidebar>
  );
}

export default BackOfficeLayout;
