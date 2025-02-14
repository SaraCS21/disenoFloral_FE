// services/locationService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/locations";

export const getLocations = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw error;
  }
};

export const getLocationById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching location by id:", error);
    throw error;
  }
};

export const createLocation = async (locationData) => {
  try {
    const response = await axios.post(API_URL, locationData);
    return response.data;
  } catch (error) {
    console.error("Error creating location:", error);
    throw error;
  }
};

export const updateLocation = async (id, locationData) => {
  try {
    const response = await axios.put(`${API_URL}${id}`, locationData);
    return response.data;
  } catch (error) {
    console.error("Error updating location:", error);
    throw error;
  }
};

export const deleteLocation = async (id) => {
  try {
    await axios.delete(`${API_URL}${id}`);
  } catch (error) {
    console.error("Error deleting location:", error);
    throw error;
  }
};
