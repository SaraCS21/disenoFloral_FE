import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { ModalProvider } from "./contexts/ModalContext";
import Modal from "./components/loginComponents/LoginModal";

const App = () => {
  return (
    <ModalProvider>
      <AppRoutes />
      <Modal />
    </ModalProvider>
  );
};

export default App;
