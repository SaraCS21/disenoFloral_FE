// services/invoiceService.js
import api from "./api";

const API_URL = "/budgets";

export const getInvoices = async () => {
  try {
    const response = await api.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching invoices:", error);
    throw error;
  }
};

export const getInvoiceById = async (id) => {
  try {
    const response = await api.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching invoice by id:", error);
    throw error;
  }
};

export const createInvoice = async (invoiceData) => {
  try {
    const response = await api.post(API_URL, invoiceData);
    return response.data;
  } catch (error) {
    console.error("Error creating invoice:", error);
    throw error;
  }
};

export const updateInvoice = async (id, invoiceData) => {
  try {
    const response = await api.put(`${API_URL}/${id}`, invoiceData);
    return response.data;
  } catch (error) {
    console.error("Error updating invoice:", error);
    throw error;
  }
};

export const deleteInvoice = async (id) => {
  try {
    await api.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting invoice:", error);
    throw error;
  }
};
