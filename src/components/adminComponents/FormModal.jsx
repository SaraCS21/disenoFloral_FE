import { useForm } from "react-hook-form";
import useFetchData from "../../hooks/useFetchData";
import FieldsModal from "./FieldsModal";

import "../../styles/formModal.css";
import { useEffect } from "react";

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
    const newItem = await handleCreateOrUpdate(data);

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

              <button type="submit">
                {currentItem ? "Actualizar" : "Crear"}
              </button>
              <button type="button" onClick={handleCloseModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
