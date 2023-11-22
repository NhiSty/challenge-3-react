import { FormProvider, useForm } from "react-hook-form";
import FirstnameControl from "@components/employee/EmployeeForm/Controls/FirstnameControl";
import LastnameControl from "@components/employee/EmployeeForm/Controls/LastnameControl";
import EmailControl from "@components/employee/EmployeeForm/Controls/EmailControl";

export default function EmployeeForm() {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={"px-1"}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FirstnameControl />
          <LastnameControl />
          <EmailControl />
          <button className="btn btn-primary mt-4 float-right" type="submit">
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
