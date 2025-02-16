import {
  FaLocationDot,
  FaFileInvoiceDollar,
  FaMapLocationDot,
} from "react-icons/fa6";
import { FaUsers, FaCalendarAlt } from "react-icons/fa";

const sidebarOptions = [
  {
    nameKey: "sidenav.locations",
    icon: <FaLocationDot />,
    option: "locations",
  },
  {
    nameKey: "sidenav.users",
    icon: <FaUsers />,
    option: "users",
  },
  {
    nameKey: "sidenav.events",
    icon: <FaCalendarAlt />,
    option: "events",
  },
  {
    nameKey: "sidenav.eventLocations",
    icon: <FaMapLocationDot />,
    option: "eventLocations",
  },
  {
    nameKey: "sidenav.invoices",
    icon: <FaFileInvoiceDollar />,
    option: "invoices",
  },
];

export default sidebarOptions;
