import adminTableOptions from "../../constants/adminTableOptions";
import useFetchData from "../../hooks/useFetchData";
import useGetUserData from "../../hooks/useGetUserData";

const roleOptions = [
  { value: "Administrator", label: "Administrador" },
  { value: "Professional", label: "Profesional" },
];

const FieldsModal = ({ register, errors, subNavbarOption }) => {
  const { data: usuarios } = useFetchData("users");
  const { data: eventos } = useFetchData("events");
  const { data: localizaciones } = useFetchData("locations");
  const userData = useGetUserData();

  const camposFormulario =
    adminTableOptions[subNavbarOption]?.options
      ?.filter((campo) => campo.form)
      .map((campo) => {
        let opciones = campo.form.options || [];

        if (campo.form.id === "userId") {
          opciones =
            userData?.role === "Professional"
              ? [
                  {
                    value: userData.id,
                    label: `${userData.firstName} ${userData.lastName}`,
                  },
                ]
              : usuarios.map((user) => ({
                  value: user.id,
                  label: `${user.firstName} ${user.lastName}`,
                }));
        } else if (campo.form.id === "eventId") {
          opciones =
            userData?.role === "Professional"
              ? eventos
                  .filter((event) => event.user.id === userData.id)
                  .map((event) => ({
                    value: event.id,
                    label: event.name,
                  }))
              : eventos.map((event) => ({
                  value: event.id,
                  label: event.name,
                }));
        } else if (campo.form.id === "locationId") {
          opciones = localizaciones.map((loc) => ({
            value: loc.id,
            label: `${loc.address} - ${loc.city}`,
          }));
        } else if (campo.form.id === "role") {
          opciones = roleOptions;
        }

        return { ...campo.form, options: opciones };
      }) || [];

  return (
    <>
      {camposFormulario.map((campo) => (
        <div key={campo.id}>
          <label htmlFor={campo.id}>{campo.label}:</label>
          {campo.type === "select" ? (
            <select id={campo.id} {...register(campo.id, campo.validation)}>
              <option value="">Selecciona una opción</option>
              {campo.options?.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={campo.id}
              type={campo.type}
              {...register(campo.id, campo.validation)}
            />
          )}
          {errors[campo.id] && (
            <p className="error-message">{errors[campo.id]?.message}</p>
          )}
        </div>
      ))}
    </>
  );
};

export default FieldsModal;
