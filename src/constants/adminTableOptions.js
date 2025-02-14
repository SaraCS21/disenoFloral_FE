const adminTableOptions = {
  locations: {
    options: [
      {
        name: "ID",
        width: "8%",
        key: "id",
      },
      {
        name: "Dirección",
        width: "30%",
        key: "address",
      },
      {
        name: "Ciudad",
        width: "25%",
        key: "city",
      },
      {
        name: "País",
        width: "25%",
        key: "country",
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
        key: "id",
      },
      {
        name: "Nombre",
        width: "20%",
        key: "firstName",
      },
      {
        name: "Apellidos",
        width: "25%",
        key: "lastName",
      },
      {
        name: "Correo",
        width: "20%",
        key: "email",
      },
      {
        name: "Rol",
        width: "15%",
        key: "role",
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
        key: "id",
      },
      {
        name: "Nombre",
        width: "15%",
        key: "name",
      },
      {
        name: "Descripción",
        width: "25%",
        key: "description",
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
        key: "id",
      },
      {
        name: "Título",
        width: "20%",
        key: "title",
      },
      {
        name: "Usuario",
        width: "20%",
        key: "userId",
      },
      {
        name: "Evento",
        width: "20%",
        key: "eventId",
      },
      {
        name: "Fecha",
        width: "10%",
        key: "creationDate",
      },
      {
        name: "Cantidad",
        width: "10%",
        textAlign: "right",
        key: "amount",
      },
      {
        name: "",
        width: "12%",
      },
    ],
  },
};
export default adminTableOptions;
