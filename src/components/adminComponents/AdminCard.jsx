import { useTranslation } from "react-i18next";
import useFetchData from "../../hooks/useFetchData";

import "../../styles/adminCard.css";

const AdminCard = ({ data }) => {
  const { t } = useTranslation();

  const { data: cardData, loading, error } = useFetchData(data.key);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar datos</p>;

  return (
    <article
      className="admin-card"
      style={{ backgroundColor: `${data.color}` }}
    >
      <div className="admin-card__icon">{data.icon}</div>

      <div className="admin-card__info">
        <h1>{cardData.length}</h1>
        <p>{t(data.nameKey)}</p>
      </div>
    </article>
  );
};

export default AdminCard;
