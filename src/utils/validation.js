// validation.js

export const validateField = (name, value) => {
  let errorMessage = "";

  switch (name) {
    case "Cantidad":
      if (!value) {
        errorMessage = "Cantidad es requerida";
      } else if (isNaN(value)) {
        errorMessage = "Cantidad debe ser un número";
      } else if (value <= 0) {
        errorMessage = "Cantidad debe ser mayor a cero";
      }
      break;

    case "Dirección":
    case "Nombre":
    case "Apellidos":
    case "Título":
    case "Descripción":
      if (!value) {
        errorMessage = `${name} es requerido`;
      }
      break;

    case "Correo":
      if (!value) {
        errorMessage = "Correo es requerido";
      } else if (
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
      ) {
        errorMessage = "Correo no válido";
      }
      break;

    case "Rol":
      if (!value) {
        errorMessage = "Rol es requerido";
      }
      break;

    case "Fecha inicio":
    case "Fecha fin":
      if (!value) {
        errorMessage = `${name} es requerido`;
      } else if (isNaN(Date.parse(value))) {
        errorMessage = `${name} debe ser una fecha válida`;
      }
      break;

    case "Localización":
    case "Evento":
      if (!value) {
        errorMessage = `${name} es requerido`;
      }
      break;

    default:
      if (!value) {
        errorMessage = `${name} es requerido`;
      }
      break;
  }

  return errorMessage;
};
