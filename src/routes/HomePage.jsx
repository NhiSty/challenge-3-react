import toTranslate from "@/utils/translate.js";

export default function HomePage() {
  return (
    <div className="bg-indigo-600 flex">
      <div className="w-1/2 flex flex-col justify-center items-start p-10 text-white">
        <h1 className="text-4xl font-bold mb-4">
          {toTranslate("Vous vous sentez seul ?")}
        </h1>
        <p className="text-lg mb-4">
          {toTranslate(
            "Vous n'avez personne avec qui partager vos passions et vos discussions ?"
          )}
        </p>
        <p className="text-lg mb-4">
          {toTranslate("Marre de la solitude et du confinement ?")}
        </p>
        <p className="text-lg mb-4">
          {toTranslate("Envie de nouvelles expériences ?")}
        </p>
        <p className="text-lg mb-4">
          {toTranslate("Avec Rent-A-Dream, transformez vos rêves en réalité !")}
        </p>
        <p className="text-lg underline">
          {toTranslate("Ne cherchez plus, CHOISISSEZ !")}
        </p>
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <img
          src="/assets/illustration-homepage.svg"
          alt="Illustration"
          className="w-full"
        />
      </div>
    </div>
  );
}
