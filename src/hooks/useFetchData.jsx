import { useEffect, useState } from "react";
import {
  createUser,
  updateUser,
  deleteUser,
  getUsers,
} from "../services/userService";
import {
  createLocation,
  updateLocation,
  deleteLocation,
  getLocations,
} from "../services/locationService";
import {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvents,
} from "../services/eventService";
import {
  createInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoices,
} from "../services/invoiceService";
import {
  createEventLocation,
  updateEventLocation,
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

const createFunctions = {
  users: createUser,
  locations: createLocation,
  events: createEvent,
  eventLocations: createEventLocation,
  invoices: createInvoice,
};

const updateFunctions = {
  users: updateUser,
  locations: updateLocation,
  events: updateEvent,
  eventLocations: updateEventLocation,
  invoices: updateInvoice,
};

const useFetchData = (subNavbarOption) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

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

  const handleCreateOrUpdate = async (formData) => {
    try {
      let response;
      let newItem = null;

      if (isUpdating && currentItem) {
        const updateFunction = updateFunctions[subNavbarOption];
        if (updateFunction) {
          response = await updateFunction(currentItem.id, formData);
          newItem = { ...currentItem, ...formData };
        }
      } else {
        const createFunction = createFunctions[subNavbarOption];
        if (createFunction) {
          response = await createFunction(formData);
          newItem = response;
        }
      }

      if (response && response.id) {
        setData((prevData) => {
          if (isUpdating) {
            return prevData.map((item) =>
              item.id === currentItem.id ? newItem : item
            );
          } else {
            return [...prevData, newItem];
          }
        });

        setIsUpdating(false);
        setCurrentItem(null);
        return newItem;
      } else {
        console.error("❌ Error en la solicitud: Respuesta inválida", response);
        return null;
      }
    } catch (error) {
      console.error("❌ Error en createOrUpdate:", error);
      return null;
    }
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    setIsUpdating(true);
  };

  return { data, loading, error, deleteItem, handleCreateOrUpdate, handleEdit };
};

export default useFetchData;
