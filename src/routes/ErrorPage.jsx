import { useRouteError } from "react-router-dom";
import toTranslate from "@/utils/translate.js";
import { Navbar } from "@components/partials/Navbar";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded shadow-lg">
          <h2 className="text-3xl font-bold mb-4">{toTranslate("Oops")}</h2>
          <img
            src="/assets/error-illustration.svg"
            alt="Error"
            className="w-1/2 mx-auto mb-4 animate-bounce"
          />
          <p className="text-lg mb-4">
            {toTranslate("Désolé, une erreur inattendue s'est produite.")}
          </p>
          <p className="text-lg mb-4">
            <i>{error.statusText || error.message}</i>
          </p>
          <a href="/" className="text-sm text-primary">
            {toTranslate("Revenir à l'accueil.")}
          </a>
        </div>
      </div>
    </div>
  );
}
