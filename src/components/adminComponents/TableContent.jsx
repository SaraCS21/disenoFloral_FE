import adminTableOptions from "../../constants/adminTableOptions";

import { MdEdit, MdDelete } from "react-icons/md";

const TableContent = ({ subNavbarOption }) => {
  // TODO: hacer la conexión a la BBDD para obtener los datos de la tabla

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
        <div className="admin-content__table__content__data">
          {subNavbarOption !== "default" &&
            adminTableOptions[subNavbarOption].options.map((option, index) => (
              <>
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
                  <p
                    key={index}
                    style={{
                      width: option.width,
                      textAlign: option?.textAlign,
                    }}
                  >
                    DATOS {option?.textAlign && "€"}
                  </p>
                )}
              </>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TableContent;
