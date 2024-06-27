import { Link } from "react-router-dom";

function NotFound () {
  return (
    <div className="Box_Erreur">
      <h3 className="Titre_Erreur">404</h3>
      <h4 className="Text_Erreur">
        Oups! La page que vous demandez n'existe pas.
      </h4>
      <Link to="/" className="Link_Erreur">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default NotFound;