import { formatDateTime } from "./formatDateTime";

// Función para obtener el valor de las claves en objetos anidados
export const getValue = (key, row) => {
  return key.split(".").reduce((acc, part) => acc?.[part], row) || "";
};

// Función para formatear la localización
export const formatLocation = (row) => {
  const address = getValue("location.address", row);
  const city = getValue("location.city", row);
  return `${address} - ${city}`;
};

// Función para formatear fechas
export const formatDate = (option, row) => {
  const value = getValue(option.key, row);
  return ["startDate", "endDate"].includes(option.key)
    ? `${formatDateTime(value).date} ${formatDateTime(value).time}`
    : value;
};

// Verifica si el campo contiene un "pipe" (|), indicando que debe combinarse
export const renderValue = (option, row) => {
  if (option.key.includes("|")) {
    if (option.key === "location.address | location.city") {
      return formatLocation(row);
    } else {
      return option.key
        .split("|")
        .map((key) => {
          return getValue(key.trim(), row);
        })
        .join(" ");
    }
  } else if (option.key) {
    return formatDate(option, row);
  }
  return "";
};
