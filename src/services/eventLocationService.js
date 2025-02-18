// services/eventService.js
import api from "./api";

const API_URL = "/event-locations";

export const getEventLocations = async () => {
  try {
    const response = await api.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching event locations:", error);
    throw error;
  }
};

export const getEventLocationById = async (id) => {
  try {
    const response = await api.get(`${API_URL}${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching event location by id:", error);
    throw error;
  }
};

export const createEventLocation = async (eventData) => {
  try {
    const response = await api.post(API_URL, eventData);
    return response.data;
  } catch (error) {
    console.error("Error creating event location:", error);
    throw error;
  }
};

export const updateEventLocation = async (id, eventData) => {
  try {
    const response = await api.put(`${API_URL}/${id}`, eventData);
    return response.data;
  } catch (error) {
    console.error("Error updating event location:", error);
    throw error;
  }
};

export const deleteEventLocation = async (id) => {
  try {
    await api.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting event location:", error);
    throw error;
  }
};
