import React, { useState, useContext, useRef } from "react"
import { FactorContext } from "./FactorProvider"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { ModalContext } from "../modals/ModalProvider"
import Form from "react-bootstrap/Form"

export const FactorDetail = (props) => {
  const { deleteFactor, editFactor } = useContext(FactorContext)
  const { handleClose } = useContext(ModalContext)
  const [ factor, setFactor ] = useState(props.factor)
  
  const handleControlledInputChange = (event) => {
    const newFactor = Object.assign({}, factor)
    newFactor[event.target.name] = event.target.value
    setFactor(newFactor)
  }

  return (
    <>
    <Modal.Header closeButton>
      <Modal.Title>
        <Form>
          <Form.Control type="text" 
          defaultValue={factor.name} 
          name="name" 
          onChange={handleControlledInputChange}
          />
        </Form>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="factor__multiplier">
        {factor.multiplier}
      </div>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="danger"
      onClick={evt => {
        deleteFactor(factor)
        handleClose()
      }}
      className="btn">
      delete
    </Button>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" 
      onClick={ clickEvent => {
        editFactor(factor)
        handleClose()
    }}
    >
      Save Changes
    </Button>
  </Modal.Footer>
  </>
  )
  
}