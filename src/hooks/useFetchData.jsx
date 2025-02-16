import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../services/userService";
import { deleteLocation, getLocations } from "../services/locationService";
import { deleteEvent, getEvents } from "../services/eventService";
import { deleteInvoice, getInvoices } from "../services/invoiceService";
import {
  deleteEventLocation,
  getEventLocations,
} from "../services/eventLocationService";

const fetchDataFunctions = {
  users: getUsers,
  locations: getLocations,
  events: getEvents,
  eventLocations: getEventLocations,
  invoices: getInvoices,
};

const deleteFunctions = {
  users: deleteUser,
  locations: deleteLocation,
  events: deleteEvent,
  eventLocations: deleteEventLocation,
  invoices: deleteInvoice,
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

  const deleteItem = async (id) => {
    try {
      const deleteFunction = deleteFunctions[subNavbarOption];

      if (deleteFunction) {
        const response = await deleteFunction(id);

        if (response.ok) {
          setData((prevData) => prevData.filter((item) => item.id !== id));
        } else {
          console.error("Error deleting item");
        }
      }
    } catch (error) {
      console.error("Error in delete request:", error);
    }
  };

  return { data, loading, error, deleteItem };
};

export default useFetchData;
