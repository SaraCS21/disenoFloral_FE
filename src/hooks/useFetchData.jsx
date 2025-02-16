import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";
import { getLocations } from "../services/locationService";
import { getEvents } from "../services/eventService";
import { getInvoices } from "../services/invoiceService";
import { getEventLocations } from "../services/eventLocationService";

const fetchDataFunctions = {
  users: getUsers,
  locations: getLocations,
  events: getEvents,
  eventLocations: getEventLocations,
  invoices: getInvoices,
};

const useFetchData = (subNavbarOption) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchFunction = fetchDataFunctions[subNavbarOption];

      if (fetchFunction) {
        try {
          setLoading(true);
          const dataFetched = await fetchFunction();
          setData(dataFetched);
        } catch (error) {
          console.error(`Error fetching ${subNavbarOption}:`, error);
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [subNavbarOption]);

  return { data, loading, error };
};

export default useFetchData;
