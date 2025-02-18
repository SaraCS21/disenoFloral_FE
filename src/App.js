import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes/AppRoutes";
import { ModalProvider } from "./contexts/ModalContext";
import Modal from "./components/loginComponents/LoginModal";

const App = () => {
  return (
    <ModalProvider>
      <BrowserRouter>
        <AppRoutes />
        <Modal />
      </BrowserRouter>
    </ModalProvider>
  );
};

export default App;
