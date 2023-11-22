import toTranslate from "@/utils/translate";
import { Plus } from "lucide-react";
import EmployeesTable from "@components/employee/EmployeesTable";
import Card from "@components/base/Card";
import { Link } from "react-router-dom";

export default function EmployeesPage() {
  return (
    <>
      <Card
        title={
          <>
            <div className={"flex flex-row content-center"}>
              {toTranslate("Employees")}
            </div>
            <div className="inline-block float-right">
              <Link
                className="btn btn-sm bg-gray-800 hover:bg-gray-300 text-white hover:text-black"
                to={"/manager/employees/new"}
              >
                <Plus size={20} />
                {toTranslate("Add new")}
              </Link>
            </div>
          </>
        }
      >
        <EmployeesTable />
      </Card>
    </>
  );
}
