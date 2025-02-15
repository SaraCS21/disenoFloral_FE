import { useTranslation } from "react-i18next";
import eventsHomeOptions from "../../constants/eventsHomeOptions";
import "../../styles/eventsHome.css";

export default function EventsHome() {
  const { t } = useTranslation();

  return (
    <div className="events-home">
      {eventsHomeOptions.map((event, index) => (
        <div
          key={index}
          className="events-home__card"
          style={{
            backgroundImage: `url("/assets/events/${event.image}")`,
          }}
        >
          <div className="events-home__card-text--wrapper">
            <div className="events-home__card-text">
              <p>{t(event.name)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
