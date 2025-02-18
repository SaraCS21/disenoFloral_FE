import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useFetchData from "../../hooks/useFetchData";
import FieldsModal from "./FieldsModal";
import { formatDateEvents } from "../../utils/formatDateTime";

import "../../styles/formModal.css";

const FormModal = ({
  isModalOpen,
  setIsModalOpen,
  subNavbarOption,
  addNewItem,
  currentItem,
  updateItem,
  isUpdating,
}) => {
  const { handleCreateOrUpdate } = useFetchData(subNavbarOption);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (currentItem) {
      Object.keys(currentItem).forEach((key) => {
        setValue(key, currentItem[key]);
      });
    }
  }, [currentItem, setValue]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      startDate: formatDateEvents(data.startDate, data.startTime),
      endDate: formatDateEvents(data.endDate, data.endTime),
    };

    const newItem = await handleCreateOrUpdate(formattedData);

    if (newItem) {
      if (isUpdating) {
        updateItem(newItem);
      } else {
        addNewItem(newItem);
      }
    } else {
      console.error("No se pudo agregar el nuevo ítem.");
    }

    handleCloseModal();
  };

  return (
    <>
      {isModalOpen && (
        <div className="form-modal--overlay">
          <div className="form-modal">
            <h2>
              {currentItem ? "Actualizar registro" : "Crear nuevo registro"}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FieldsModal
                register={register}
                errors={errors}
                subNavbarOption={subNavbarOption}
              />

              <div className="form-modal__buttons">
                <button type="button" onClick={handleCloseModal}>
                  Cerrar
                </button>
                <button type="submit">
                  {currentItem ? "Actualizar" : "Crear"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
