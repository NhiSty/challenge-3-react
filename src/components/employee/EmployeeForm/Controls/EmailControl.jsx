import { useController, useFormContext } from "react-hook-form";
import { Input } from "@components/form/Input";
import toTranslate from "@/utils/translate";

export default function EmailControl() {
  const name = "email";
  const label = toTranslate("Email");
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors[name];
  const requiredErrorMessage =
    error?.type === "required"
      ? `${label} ${toTranslate("est obligatoire")}`
      : "";
  const patternErrorMessage =
    error?.type === "pattern" ? `${label} ${toTranslate("est invalide")}` : "";
  const errorMessage = requiredErrorMessage || patternErrorMessage;

  const {
    field: { value, onChange },
  } = useController({
    name,
    rules: {
      required: true,
      pattern: {
        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      },
    },
    defaultValue: "",
  });

  return (
    <>
      <div className="mb-4">
        <Input
          id={name}
          name={name}
          label={label}
          placeholder={label}
          value={value}
          onChange={onChange}
          error={errorMessage}
        />
      </div>
    </>
  );
}
