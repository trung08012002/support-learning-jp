"use client"
import { Modal } from "flowbite-react";
import { title } from "process";
import React, { ReactNode } from "react"
import RequestModal from "./requestModal";
import FixedVocabularyModalBody, { FixedVocabularyModalBodyProps } from "./fixedVocabularyModalBody";

type ModalProps = {
  openModal: boolean,
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
} & FixedVocabularyModalBodyProps;

const FixedTranslationModal = ({ openModal, setOpenModal, kanji, hiragana, meaningsVocab, }: ModalProps) => {

  return (
    <RequestModal openModal={openModal} setOpenModal={setOpenModal} title={"Sửa bản dịch từ vựng"}
      body={<FixedVocabularyModalBody
        kanji={kanji} hiragana={hiragana} meaningsVocab={meaningsVocab} />} footer={<></>} />
  )
};

export default FixedTranslationModal;
