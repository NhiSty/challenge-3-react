import {Navigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types,no-unused-vars
export default function ProtectedRoute({ children, role }) {
    const isConnected = true; // Todo faire hook pour vérifier si l'utilisateur est connecté

    // Todo faire en sorte de récupérer le rôle de l'user via son token (jwt) et s'il match avec le rôle passé en props alors c'est good
    // Todo donc il faut aussi faire un hook pour récupérer le token de l'utilisateur et le décoder pour récupérer les données de l'user
    const isAuthorized = role === "manager";

    if(!isConnected) {
        return <Navigate to="/login" />;
    }

    if (!isAuthorized) {
        // Todo faire une route (avec page) 403 Forbidden (non autorisé)
        return <Navigate to="/login" />;
    }

    return (
        <>
            {children}
        </>
    )
}
