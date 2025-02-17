import { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { renderValue } from "../../utils/tableContentFunctions";
import adminTableOptions from "../../constants/adminTableOptions";

import useFetchData from "../../hooks/useFetchData";
import ActionModal from "./ActionModal";

const TableContent = ({ subNavbarOption, localData, setLocalData }) => {
  const { loading, error, deleteItem } = useFetchData(subNavbarOption);

  const [itemToDelete, setItemToDelete] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = (id) => {
    setItemToDelete(id);
    setShowModal(true);
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
        {localData.map((row, rowIndex) => (
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
                        <button className="admin-content__table__content__data--buttons__edit">
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
        setShowModal={setShowModal}
        setLocalData={setLocalData}
        showModal={showModal}
      />
    </section>
  );
};

export default TableContent;
