import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaUsers, FaCalendarAlt } from "react-icons/fa";

const adminCards = [
  {
    nameKey: "sidenav.users",
    icon: <FaUsers />,
    color: "var(--color-blue)",
    key: "users",
  },
  {
    nameKey: "sidenav.events",
    icon: <FaCalendarAlt />,
    color: "var(--color-warning)",
    key: "events",
  },
  {
    nameKey: "sidenav.invoices",
    icon: <FaFileInvoiceDollar />,
    color: "var(--color-danger)",
    key: "invoices",
  },
];

export default adminCards;
