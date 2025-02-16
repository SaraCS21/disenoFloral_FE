import useFetchData from "../../hooks/useFetchData";
import adminTableOptions from "../../constants/adminTableOptions";
import { renderValue } from "../../utils/tableContentFunctions";

import { MdEdit, MdDelete } from "react-icons/md";

const TableContent = ({ subNavbarOption }) => {
  const { data, loading, error } = useFetchData(subNavbarOption);

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
        {data.map((row, rowIndex) => (
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
                        <button className="admin-content__table__content__data--buttons__delete">
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
    </section>
  );
};

export default TableContent;
