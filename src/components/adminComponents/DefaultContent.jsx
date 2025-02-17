import { useEffect, useState } from "react";
import AdminCard from "./AdminCard";
import adminCards from "../../constants/adminCards";
import { getCurrentDate } from "../../utils/getCurrentDate";

import { FaCalendarAlt } from "react-icons/fa";
import { getEventLocations } from "../../services/eventLocationService";
import { formatDateTime } from "../../utils/formatDateTime";

const DefaultContent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const allEvents = await getEventLocations();
        const now = new Date();

        const upcomingEvents = allEvents.filter(
          (event) => new Date(event.startDate) > now
        );

        setEvents(upcomingEvents);
      } catch (error) {
        console.error("Error fetching upcoming events:", error);
      }
    };

    fetchEvents();
  }, []);

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
          {events.length === 0 ? (
            <p className="admin-content__events__no-dates">
              No hay eventos próximos
            </p>
          ) : (
            events.map((event, index) => (
              <div className="admin-content__events__dates" key={index}>
                <p>{event.event.name}</p>
                <p>
                  {formatDateTime(event.startDate).date} -{" "}
                  {formatDateTime(event.startDate).time} /{" "}
                  {formatDateTime(event.endDate).date} -{" "}
                  {formatDateTime(event.endDate).time}
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
