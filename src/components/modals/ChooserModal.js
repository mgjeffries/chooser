import React, { useContext } from "react"
import { ModalContext } from "./ModalProvider"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"


export const ChooserModal = () => {
  const { show, handleClose, modalContent } = useContext(ModalContext)

  return (
  <Modal show={show} onHide={handleClose}>
    {
      modalContent
    }
  </Modal>
  )
}