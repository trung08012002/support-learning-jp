"use client"
import { Modal } from "flowbite-react";
import { title } from "process";
import React, { ReactNode } from "react"

type ModalProps = {
  openModal: boolean,
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
  title: string,
  body: ReactNode,
  footer: ReactNode
}

const RequestModal = ({ openModal, setOpenModal, title, body, footer }: ModalProps) => {
  const handleClose = () => {
    setOpenModal(false);
  }
  return (
    <Modal show={openModal} onClose={handleClose}>
      <Modal.Header>
        <span>{title}</span>
      </Modal.Header>
      <Modal.Body>
        {body}
      </Modal.Body>
      <Modal.Footer>
        {footer}
      </Modal.Footer>
    </Modal>
  )
};

export default RequestModal;
