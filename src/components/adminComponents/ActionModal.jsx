import "../../styles/actionModal.css";

const ActionModal = ({
  deleteItem,
  itemToDelete,
  setLocalData,
  showModal,
  setShowModal,
}) => {
  const handleConfirmDelete = () => {
    try {
      deleteItem(itemToDelete);
      setShowModal(false);

      setLocalData((prevData) =>
        prevData.filter((item) => item.id !== itemToDelete)
      );
    } catch (error) {
      console.error("Error al eliminar el ítem:", error);
    }
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal__content">
            <p>¿Estás seguro de que quieres eliminar este elemento?</p>

            <div className="modal__content__buttons-container">
              <button onClick={handleCancelDelete}>No</button>
              <button onClick={handleConfirmDelete}>Sí</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActionModal;
