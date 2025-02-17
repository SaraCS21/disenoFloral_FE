import React, { useEffect, useState } from "react";
import AdminNavbar from "../components/adminComponents/AdminNavbar";
import SideNavbar from "../components/adminComponents/SideNavbar";
import DefaultContent from "../components/adminComponents/DefaultContent";
import TableContent from "../components/adminComponents/TableContent";
import useFetchData from "../hooks/useFetchData";

import "../styles/adminPage.css";

const Admin = () => {
  const [subNavbarName, setSubNavbarName] = useState("Panel de Adminstración");
  const [subNavbarOption, setSubNavbarOption] = useState("default");

  const { data } = useFetchData(subNavbarOption);
  const [localData, setLocalData] = useState(data);

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  const addNewItem = (newItem) => {
    setLocalData((prevData) => [...prevData, newItem]);
  };

  return (
    <div className="admin-page">
      <SideNavbar
        setSubNavbarName={setSubNavbarName}
        setSubNavbarOption={setSubNavbarOption}
      />
      <AdminNavbar
        subNavbarName={subNavbarName}
        subNavbarOption={subNavbarOption}
        addNewItem={addNewItem}
      />

      <div className="admin-content">
        {subNavbarOption === "default" ? (
          <DefaultContent />
        ) : (
          <TableContent
            subNavbarOption={subNavbarOption}
            localData={localData}
            setLocalData={setLocalData}
          />
        )}
      </div>
    </div>
  );
};

export default Admin;
