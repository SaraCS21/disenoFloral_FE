import React, { useState } from "react";
import AdminNavbar from "../components/adminComponents/AdminNavbar";
import SideNavbar from "../components/adminComponents/SideNavbar";
import DefaultContent from "../components/adminComponents/DefaultContent";
import TableContent from "../components/adminComponents/TableContent";

import "../styles/adminPage.css";

const Admin = () => {
  const [subNavbarName, setSubNavbarName] = useState("Panel de Adminstración");
  const [subNavbarOption, setSubNavbarOption] = useState("default");

  return (
    <div className="admin-page">
      <SideNavbar
        setSubNavbarName={setSubNavbarName}
        setSubNavbarOption={setSubNavbarOption}
      />
      <AdminNavbar
        subNavbarName={subNavbarName}
        subNavbarOption={subNavbarOption}
      />

      <div className="admin-content">
        {subNavbarOption === "default" ? (
          <DefaultContent />
        ) : (
          <TableContent subNavbarOption={subNavbarOption} />
        )}
      </div>
    </div>
  );
};

export default Admin;
