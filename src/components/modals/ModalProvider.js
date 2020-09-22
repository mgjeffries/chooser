import React, { useState } from "react";

export const ModalContext = React.createContext();

export const ModalProvider = (props) => {
  const [modalContent, setModalContent] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ModalContext.Provider
      value={{
        show,
        handleClose,
        handleShow,
        modalContent,
        setModalContent,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
