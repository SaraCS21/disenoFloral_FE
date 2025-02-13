import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import SideNavbar from "../components/SideNavbar";
import "../styles/adminPage.css";

const Admin = () => {
  const [subNavbarName, setSubNavbarName] = useState("Panel de Adminstración");

  return (
    <div className="admin-page">
      <SideNavbar setSubNavbarName={setSubNavbarName} />
      <AdminNavbar subNavbarName={subNavbarName} />

      <div className="admin-content">
        <p>Contenido</p>
      </div>
    </div>
  );
};

export default Admin;
