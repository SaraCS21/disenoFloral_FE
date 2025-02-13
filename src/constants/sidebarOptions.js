import { FaLocationDot, FaFileInvoiceDollar } from "react-icons/fa6";
import { FaUsers, FaCalendarAlt } from "react-icons/fa";

const sidebarOptions = [
  {
    nameKey: "sidenav.locations",
    icon: <FaLocationDot />,
  },
  {
    nameKey: "sidenav.users",
    icon: <FaUsers />,
  },
  {
    nameKey: "sidenav.events",
    icon: <FaCalendarAlt />,
  },
  {
    nameKey: "sidenav.invoices",
    icon: <FaFileInvoiceDollar />,
  },
];

export default sidebarOptions;
