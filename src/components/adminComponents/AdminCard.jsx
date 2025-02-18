import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import useFetchData from "../../hooks/useFetchData";
import useGetUserData from "../../hooks/useGetUserData";

import "../../styles/adminCard.css";

const AdminCard = ({ data }) => {
  const { t } = useTranslation();
  const { data: cardData, loading, error } = useFetchData(data.key);
  const userData = useGetUserData();

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (!cardData || !userData) return;

    if (userData.role === "Professional") {
      setFilteredData(
        cardData.filter((item) => item?.user?.id === userData.id)
      );
    } else {
      setFilteredData(cardData);
    }
  }, [cardData, userData]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar datos</p>;

  return (
    <article className="admin-card" style={{ backgroundColor: data.color }}>
      <div className="admin-card__icon">{data.icon}</div>

      <div className="admin-card__info">
        <h1>{filteredData.length}</h1>
        <p>{t(data.nameKey)}</p>
      </div>
    </article>
  );
};

export default AdminCard;
