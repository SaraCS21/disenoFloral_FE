const adminTableOptions = {
  locations: {
    options: [
      {
        name: "ID",
        width: "8%",
      },
      {
        name: "Dirección",
        width: "30%",
      },
      {
        name: "Ciudad",
        width: "25%",
      },
      {
        name: "País",
        width: "25%",
      },
      {
        name: "",
        width: "12%",
      },
    ],
  },

  users: {
    options: [
      {
        name: "ID",
        width: "8%",
      },
      {
        name: "Nombre",
        width: "20%",
      },
      {
        name: "Apellidos",
        width: "25%",
      },
      {
        name: "Correo",
        width: "20%",
      },
      {
        name: "Rol",
        width: "15%",
      },
      {
        name: "",
        width: "12%",
      },
    ],
  },

  events: {
    options: [
      {
        name: "ID",
        width: "8%",
      },
      {
        name: "Nombre",
        width: "15%",
      },
      {
        name: "Descripción",
        width: "25%",
      },
      {
        name: "Usuario",
        width: "15%",
      },
      {
        name: "Dirección",
        width: "25%",
      },
      {
        name: "",
        width: "12%",
      },
    ],
  },

  invoices: {
    options: [
      {
        name: "ID",
        width: "8%",
      },
      {
        name: "Título",
        width: "20%",
      },
      {
        name: "Usuario",
        width: "20%",
      },
      {
        name: "Evento",
        width: "20%",
      },
      {
        name: "Fecha",
        width: "10%",
      },
      {
        name: "Cantidad",
        width: "10%",
        textAlign: "right",
      },
      {
        name: "",
        width: "12%",
      },
    ],
  },
};
export default adminTableOptions;
