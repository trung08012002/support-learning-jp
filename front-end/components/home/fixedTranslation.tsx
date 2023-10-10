"use client";
import React, { useState } from "react"
import FixedTranslationModal from "./FixedVocabularyModal";
import { FixedVocabularyModalBodyProps } from "./fixedVocabularyModalBody";

type FixedTranslation = {} & FixedVocabularyModalBodyProps;

const FixedTranslation = ({ kanji, hiragana, meaningsVocab }: FixedTranslation) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(false);
  }
  return (
    <>
      <button onClick={handleOpenModal} className="underline text-linkSecondary w-fit p-1 pl-0"><span>Sửa bản dịch</span></button>
      <FixedTranslationModal openModal={openModal} setOpenModal={setOpenModal} kanji={kanji} hiragana={hiragana} meaningsVocab={meaningsVocab}></FixedTranslationModal></>
  )
};

export default FixedTranslation;
