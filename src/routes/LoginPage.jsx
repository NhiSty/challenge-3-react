import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@components/form/Input";
import { Loader2, Lock, LogIn, User } from "lucide-react";
import { Button } from "@components/base/Button";
import classNames from "classnames";
import { login } from "@/api/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toTranslate from "@/utils/translate.js";

export default function LoginPage() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await login(data.email, data.password);
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Une erreur s'est produite. Veuillez réessayer !");
      reset();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className="bg-white shadow-md rounded p-8 w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id="email"
          label="Email"
          icon={<User className="w-5 h-5" />}
          error={errors.email?.message}
          {...register("email", { required: "Email address is required" })}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          icon={<Lock className="w-5 h-5" />}
          error={errors.password?.message}
          {...register("password", { required: "Password is required" })}
        />

        <div className="flex flex-row justify-end gap-2 pt-2">
          <Button
            type="submit"
            className="btn btn-primary"
            disabled={!isValid || loading}
            icon={loading ? Loader2 : LogIn}
            iconClassName={classNames({ "animate-spin": loading })}
          >
            {toTranslate("Se connecter")}
          </Button>
        </div>
      </form>

      <div>
        <p className="mt-3 font-bold text-center">
          {toTranslate("Don't have an account ? ")}
          <a className="text-primary" href="/register">
            {toTranslate("S'inscrire")}
          </a>
        </p>
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
}
