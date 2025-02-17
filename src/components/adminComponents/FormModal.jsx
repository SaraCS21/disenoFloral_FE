import { useForm } from "react-hook-form";
import useFetchData from "../../hooks/useFetchData";
import FieldsModal from "./FieldsModal";

import "../../styles/formModal.css";

const FormModal = ({
  isModalOpen,
  setIsModalOpen,
  subNavbarOption,
  addNewItem,
}) => {
  const { handleCreateOrUpdate } = useFetchData(subNavbarOption);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (data) => {
    const newItem = await handleCreateOrUpdate(data);

    if (newItem) {
      addNewItem(newItem);
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
            <h2>Create New Item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FieldsModal
                register={register}
                errors={errors}
                subNavbarOption={subNavbarOption}
              />

              <button type="submit">Create</button>
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
