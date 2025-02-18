// services/locationService.js
import api from "./api";

const API_URL = "/locations";

export const getLocations = async () => {
  try {
    const response = await api.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw error;
  }
};

export const getLocationById = async (id) => {
  try {
    const response = await api.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching location by id:", error);
    throw error;
  }
};

export const createLocation = async (locationData) => {
  try {
    const response = await api.post(API_URL, locationData);
    return response.data;
  } catch (error) {
    console.error("Error creating location:", error);
    throw error;
  }
};

export const updateLocation = async (id, locationData) => {
  try {
    const response = await api.put(`${API_URL}/${id}`, locationData);
    return response.data;
  } catch (error) {
    console.error("Error updating location:", error);
    throw error;
  }
};

export const deleteLocation = async (id) => {
  try {
    await api.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting location:", error);
    throw error;
  }
};
