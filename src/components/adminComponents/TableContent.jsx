import { useEffect, useState } from "react";

import { getUsers } from "../../services/userService";
import { getLocations } from "../../services/locationService";
import { getEvents } from "../../services/eventService";
import { getInvoices } from "../../services/invoiceService";
import adminTableOptions from "../../constants/adminTableOptions";

import { MdEdit, MdDelete } from "react-icons/md";

const TableContent = ({ subNavbarOption }) => {
  const [data, setData] = useState([]);

  const fetchDataFunctions = {
    users: getUsers,
    locations: getLocations,
    events: getEvents,
    invoices: getInvoices,
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchFunction = fetchDataFunctions[subNavbarOption];

      if (fetchFunction) {
        try {
          const dataFetched = await fetchFunction();
          setData(dataFetched);
        } catch (error) {
          console.error(`Error fetching ${subNavbarOption}:`, error);
        }
      }
    };

    fetchData();
  }, [subNavbarOption]);

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
                      <p>{row[option.key]}</p>
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
