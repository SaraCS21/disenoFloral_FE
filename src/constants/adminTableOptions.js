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
        form: {
          id: "address",
          label: "Dirección",
          type: "text",
          validation: {
            required: "La dirección es obligatoria",
            minLength: {
              value: 3,
              message: "La localización debe tener al menos 3 caracteres",
            },
          },
        },
      },
      {
        name: "Ciudad",
        width: "25%",
        key: "city",
        form: {
          id: "city",
          label: "Ciudad",
          type: "text",
          validation: {
            required: "La ciudad es obligatoria",
            minLength: {
              value: 3,
              message: "La ciudad debe tener al menos 3 caracteres",
            },
          },
        },
      },
      {
        name: "País",
        width: "25%",
        key: "country",
        form: {
          id: "country",
          label: "País",
          type: "text",
          validation: {
            required: "El país es obligatorio",
            minLength: {
              value: 3,
              message: "El país debe tener al menos 3 caracteres",
            },
          },
        },
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
        form: {
          id: "firstName",
          label: "Nombre",
          type: "text",
          validation: {
            required: "El nombre es obligatorio",
            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres",
            },
          },
        },
      },
      {
        name: "Apellidos",
        width: "25%",
        key: "lastName",
        form: {
          id: "lastName",
          label: "Apellidos",
          type: "text",
          validation: {
            required: "El apellido es obligatorio",
            minLength: {
              value: 3,
              message: "El apellido debe tener al menos 3 caracteres",
            },
          },
        },
      },
      {
        name: "Correo",
        width: "20%",
        key: "email",
        form: {
          id: "email",
          label: "Correo",
          type: "email",
          validation: {
            required: "El correo es obligatorio",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "El email no es válido",
            },
          },
        },
      },
      {
        name: " ",
        key: "",
        form: {
          id: "password",
          label: "Contraseña",
          type: "password",
          validation: {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 3,
              message: "La contraseña debe tener al menos 3 caracteres",
            },
          },
        },
      },
      {
        name: "Rol",
        width: "15%",
        key: "role",
        form: {
          id: "role",
          label: "Rol",
          type: "select",
          options: ["Administrator", "Professional"],
          validation: {
            required: "El rol es obligatorio",
          },
        },
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
        form: {
          id: "name",
          label: "Nombre",
          type: "text",
          validation: {
            required: "El nombre es obligatorio",
            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres",
            },
          },
        },
      },
      {
        name: "Descripción",
        width: "30%",
        key: "description",
        form: {
          id: "description",
          label: "Descripción",
          type: "text",
          validation: {
            required: "La descripción es obligatoria",
            minLength: {
              value: 3,
              message: "La descripción debe tener al menos 3 caracteres",
            },
          },
        },
      },
      {
        name: "Usuario",
        width: "25%",
        key: "user.firstName | user.lastName",
        form: {
          id: "userId",
          label: "Usuario",
          type: "select",
          options: ["TODO"],
          validation: {
            required: "El usuario es obligatorio",
          },
        },
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
        form: {
          id: "eventId",
          label: "Evento",
          type: "select",
          options: ["TODO"],
          validation: {
            required: "El evento es obligatorio",
          },
        },
      },
      {
        name: "Usuario",
        width: "15%",
        key: "event.user.firstName | event.user.lastName",
        form: {
          id: "userId",
          label: "Usuario",
          type: "select",
          options: ["TODO"],
          validation: {
            required: "El usuario es obligatorio",
          },
        },
      },
      {
        name: "Localización",
        width: "20%",
        key: "location.address | location.city",
        form: {
          id: "locationId",
          label: "Localización",
          type: "select",
          options: ["TODO"],
          validation: {
            required: "La localización es obligatoria",
          },
        },
      },
      {
        name: "Fecha inicio",
        width: "15%",
        key: "startDate",
        form: {
          id: "startDate",
          label: "Fecha inicio",
          type: "date",
          validation: {
            required: "La fecha de inicio es obligatoria",
          },
        },
      },
      {
        name: "Fecha fin",
        width: "15%",
        key: "endDate",
        form: {
          id: "endDate",
          label: "Fecha fin",
          type: "date",
          validation: {
            required: "La fecha de fin es obligatoria",
          },
        },
      },
      {
        name: " ",
        width: "",
        key: "",
        form: {
          id: "startTime",
          label: "Hora inicio",
          type: "time",
          validation: {
            required: "La hora de inicio es obligatoria",
          },
        },
      },
      {
        name: " ",
        width: "",
        key: "",
        form: {
          id: "endTime",
          label: "Hora fin",
          type: "time",
          validation: {
            required: "La hora de fin es obligatoria",
          },
        },
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
        form: {
          id: "title",
          label: "Título",
          type: "text",
          validation: {
            required: "El título es obligatorio",
            minLength: {
              value: 3,
              message: "El título debe tener al menos 3 caracteres",
            },
          },
        },
      },
      {
        name: "Usuario",
        width: "25%",
        key: "event.user.firstName | event.user.lastName",
        form: {
          id: "userId",
          label: "Usuario",
          type: "select",
          options: ["TODO"],
          validation: {
            required: "El usuario es obligatorio",
          },
        },
      },
      {
        name: "Evento",
        width: "25%",
        key: "event.name",
        form: {
          id: "eventId",
          label: "Evento",
          type: "select",
          options: ["TODO"],
          validation: {
            required: "El evento es obligatorio",
          },
        },
      },
      {
        name: "Cantidad",
        width: "10%",
        textAlign: "right",
        key: "amount",
        form: {
          id: "amount",
          label: "Cantidad",
          type: "number",
          validation: {
            required: "La cantidad es obligatoria",
            min: { value: 0, message: "La cantidad debe ser mayor a 0" },
            max: { value: 9999, message: "La cantidad debe ser menor a 9999" },
          },
        },
      },
      {
        name: "",
        width: "12%",
      },
    ],
  },
};
export default adminTableOptions;
