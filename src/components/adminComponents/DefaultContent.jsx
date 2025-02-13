import { useState } from "react";
import AdminCard from "./AdminCard";
import adminCards from "../../constants/adminCards";
import { getCurrentDate } from "../../utils/getCurrentDate";

import { FaCalendarAlt } from "react-icons/fa";

const DefaultContent = () => {
  // TODO: Conectar con la BBDD para ver los eventos próximos
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  return (
    <>
      <section className="admin-content__cards">
        {adminCards.map((card, index) => (
          <AdminCard key={index} data={card} />
        ))}
      </section>

      <section className="admin-content__events">
        <div className="admin-content__events__title">
          <FaCalendarAlt />
          <p>{getCurrentDate()}</p>
        </div>

        <p className="admin-content__events__text">Próximos eventos</p>

        <div className="admin-content__events__content__dates">
          {upcomingEvents.length === 0 ? (
            <p className="admin-content__events__no-dates">
              No hay eventos próximos
            </p>
          ) : (
            upcomingEvents.map((event, index) => (
              <div className="admin-content__events__dates" key={index}>
                <p>{event.name}</p>
                <p>
                  {event.date} - {event.time}
                </p>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default DefaultContent;
