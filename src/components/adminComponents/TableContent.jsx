import { useState, useMemo } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { renderValue } from "../../utils/tableContentFunctions";
import adminTableOptions from "../../constants/adminTableOptions";

import useFetchData from "../../hooks/useFetchData";
import useGetUserData from "../../hooks/useGetUserData";
import ActionModal from "./ActionModal";
import FormModal from "./FormModal";

const TableContent = ({ subNavbarOption, localData, setLocalData }) => {
  const { loading, error, deleteItem } = useFetchData(subNavbarOption);
  const userData = useGetUserData();

  const [itemToDelete, setItemToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const filteredData = useMemo(() => {
    if (userData?.role === "Professional") {
      return localData.filter((item) => {
        return (
          item?.user?.id === userData.id ||
          item?.event?.user?.id === userData.id
        );
      });
    }
    return localData;
  }, [localData, userData]);

  console.log(filteredData);

  const handleDeleteClick = (id) => {
    setItemToDelete(id);
    setShowDeleteModal(true);
  };

  const handleUpdateClick = (id) => {
    setCurrentItem(id);
    setShowUpdateModal(true);
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar datos</p>;

  return (
    <section className="admin-content__table">
      <div className="admin-content__table__head">
        {subNavbarOption !== "default" &&
          adminTableOptions[subNavbarOption].options.map((option, index) => (
            <p
              key={index}
              style={{ width: option.width, textAlign: option?.textAlign }}
            >
              {option.name}
            </p>
          ))}
      </div>

      <div className="admin-content__table__content">
        {filteredData.map((row, rowIndex) => (
          <div key={rowIndex} className="admin-content__table__content__data">
            {subNavbarOption !== "default" &&
              adminTableOptions[subNavbarOption].options.map(
                (option, colIndex) => (
                  <div
                    key={colIndex}
                    style={{
                      width: option.width,
                      textAlign: option?.textAlign,
                    }}
                  >
                    {option.name === "" ? (
                      <div className="admin-content__table__content__data--buttons">
                        <button
                          className="admin-content__table__content__data--buttons__edit"
                          onClick={() => handleUpdateClick(row)}
                        >
                          <MdEdit />
                        </button>
                        <button
                          className="admin-content__table__content__data--buttons__delete"
                          onClick={() => handleDeleteClick(row.id)}
                        >
                          <MdDelete />
                        </button>
                      </div>
                    ) : (
                      renderValue(option, row)
                    )}
                  </div>
                )
              )}
          </div>
        ))}
      </div>

      <ActionModal
        deleteItem={deleteItem}
        itemToDelete={itemToDelete}
        setShowModal={setShowDeleteModal}
        setLocalData={setLocalData}
        showModal={showDeleteModal}
      />

      <FormModal
        isModalOpen={showUpdateModal}
        setIsModalOpen={setShowUpdateModal}
        subNavbarOption={subNavbarOption}
        currentItem={currentItem}
        updateItem={(updatedItem) =>
          setLocalData((prevData) =>
            prevData.map((item) =>
              item.id === updatedItem.id ? updatedItem : item
            )
          )
        }
        isUpdating
      />
    </section>
  );
};

export default TableContent;
