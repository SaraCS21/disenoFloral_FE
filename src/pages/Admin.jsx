import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import SideNavbar from "../components/SideNavbar";
import AdminCard from "../components/AdminCard";
import adminCards from "../constants/adminCards";

import "../styles/adminPage.css";

import { FaCalendarAlt } from "react-icons/fa";
import { getCurrentDate } from "../utils/getCurrentDate";

const Admin = () => {
  const [subNavbarName, setSubNavbarName] = useState("Panel de Adminstración");

  // TODO: Conectar con la BBDD para ver los eventos próximos
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  return (
    <div className="admin-page">
      <SideNavbar setSubNavbarName={setSubNavbarName} />
      <AdminNavbar subNavbarName={subNavbarName} />

      <div className="admin-content">
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
      </div>
    </div>
  );
};

export default Admin;
