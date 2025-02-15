import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaUsers, FaCalendarAlt } from "react-icons/fa";

const adminCards = [
  {
    nameKey: "sidenav.users",
    icon: <FaUsers />,
    color: "#1D8AE1",
    key: "users",
  },
  {
    nameKey: "sidenav.events",
    icon: <FaCalendarAlt />,
    color: "#D98B18",
    key: "events",
  },
  {
    nameKey: "sidenav.invoices",
    icon: <FaFileInvoiceDollar />,
    color: "#C94B3B",
    key: "invoices",
  },
];

export default adminCards;
