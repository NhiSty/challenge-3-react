import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@components/form/Input";
import { Loader2, Lock, User, UserPlus } from "lucide-react";
import Button  from "@components/base/Button";
import classNames from "classnames";
import { register } from "@/api/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toTranslate from "@/utils/translate.js";

export default function RegisterPage() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register: registerForm,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      username: "",
      firstName: "",
      lastName: "",
      age: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await register(data);

      navigate("/login");
    } catch (error) {
      setLoading(false);
      console.error(error);
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
          icon={<UserPlus className="w-5 h-5" />}
          error={errors.email?.message}
          {...registerForm("email", {
            required: "L'adresse e-mail est requise",
          })}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          icon={<Lock className="w-5 h-5" />}
          error={errors.password?.message}
          {...registerForm("password", {
            required: "Le mot de passe est requis",
          })}
        />

        <Input
          id="username"
          label="Nom d'utilisateur"
          icon={<User className="w-5 h-5" />}
          error={errors.username?.message}
          {...registerForm("username", {
            required: "Le nom d'utilisateur est requis",
          })}
        />

        <Input
          id="firstName"
          label="Prénom"
          icon={<User className="w-5 h-5" />}
          error={errors.firstName?.message}
          {...registerForm("firstName", { required: "Le prénom est requis" })}
        />

        <Input
          id="lastName"
          label="Nom"
          icon={<User className="w-5 h-5" />}
          error={errors.lastName?.message}
          {...registerForm("lastName", { required: "Le nom est requis" })}
        />

        <Input
          id="age"
          label="Âge"
          type="number"
          icon={<User className="w-5 h-5" />}
          error={errors.age?.message}
          {...registerForm("age", { required: "L'âge est requis" })}
        />

        <div className="flex flex-row justify-end gap-2 pt-2">
          <Button
            type="submit"
            className="btn btn-primary"
            disabled={!isValid || loading}
            icon={loading ? Loader2 : UserPlus}
            iconClassName={classNames({ "animate-spin": loading })}
          >
            {toTranslate("S'inscrire")}
          </Button>
        </div>
      </form>

      <div>
        <p className="mt-3 font-bold text-center">
          Vous avez déjà un compte ?{" "}
          <a className="text-primary" href="/login">
            {toTranslate("Connexion")}
          </a>
        </p>
      </div>
    </div>
  );
}
