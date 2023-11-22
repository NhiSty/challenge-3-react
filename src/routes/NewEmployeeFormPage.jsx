import EmployeeForm from "@components/employee/EmployeeForm";
import Card from "@components/base/Card";

export default function NewEmployeeFormPage() {
  return (
    <>
      <Card title={"Add new employee"}>
        <EmployeeForm />
      </Card>
    </>
  );
}
