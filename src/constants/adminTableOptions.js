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
        width: "25%",
        key: "name",
      },
      {
        name: "Descripción",
        width: "30%",
        key: "description",
      },
      {
        name: "Usuario",
        width: "25%",
        key: "user.firstName | user.lastName",
      },
      {
        name: "",
        width: "12%",
      },
    ],
  },

  eventLocations: {
    options: [
      {
        name: "ID",
        width: "8%",
        key: "id",
      },
      {
        name: "Evento",
        width: "15%",
        key: "event.name",
      },
      {
        name: "Usuario",
        width: "15%",
        key: "event.user.firstName | event.user.lastName",
      },
      {
        name: "Localización",
        width: "20%",
        key: "location.address | location.city",
      },
      {
        name: "Fecha inicio",
        width: "15%",
        key: "startDate",
      },
      {
        name: "Fecha fin",
        width: "15%",
        key: "endDate",
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
        width: "25%",
        key: "event.user.firstName | event.user.lastName",
      },
      {
        name: "Evento",
        width: "25%",
        key: "event.name",
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
