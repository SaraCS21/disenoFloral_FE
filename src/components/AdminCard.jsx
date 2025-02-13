import { useTranslation } from "react-i18next";

import "../styles/adminCard.css";
import { useState } from "react";

const AdminCard = ({ data }) => {
  const { t } = useTranslation();

  // TODO: consulta a la BBDD para obtener el número total de datos
  const [contData, setContData] = useState(0);

  return (
    <article
      className="admin-card"
      style={{ backgroundColor: `${data.color}` }}
    >
      <div className="admin-card__icon">{data.icon}</div>

      <div className="admin-card__info">
        <h1>{contData}</h1>
        <p>{t(data.nameKey)}</p>
      </div>
    </article>
  );
};

export default AdminCard;
