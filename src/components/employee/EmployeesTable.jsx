import toTranslate from "@/utils/translate";

const fakeData = [
  {
    name: "Thomas",
    email: "thomas.jallu@gmail.com",
    role: "Manager",
  },
  {
    name: "Serkan",
    email: "serkan.bg@gmail.com",
    role: "Manager",
  },
  {
    name: "Erwan",
    email: "erwan.bg@gmail.com",
    role: "Manager",
  },
  {
    name: "Hamidou",
    email: "hamidou.bg@gmail.com",
    role: "Manager",
  },
];

export default function EmployeesTable() {
  return (
    <table className="table w-full">
      <thead className={"bg-base-200"}>
        <tr>
          <th>{toTranslate("Name")}</th>
          <th>{toTranslate("Email")}</th>
          <th>{toTranslate("Role")}</th>
        </tr>
      </thead>
      <tbody>
        {fakeData.map((employee) => (
          <tr key={employee.email}>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img
                      src="https://reqres.in/img/faces/1-image.jpg"
                      alt="Avatar"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{employee.name}</div>
                </div>
              </div>
            </td>
            <td>{employee.email}</td>
            <td>
              <div className="badge badge-primary">{employee.role}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
