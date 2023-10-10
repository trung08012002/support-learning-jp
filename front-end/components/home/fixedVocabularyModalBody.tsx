import React from "react"
import { Example } from "./vocabularyTab";
export type FixedVocabularyModalBodyProps = {
    kanji: string,
    hiragana: string,
    meaningsVocab: MeaningVocab[],
}
export type MeaningByLanguage = {
    english: string,
    vietnamese: string,
}
export type MeaningVocab = {
    title: string,
    meaning: MeaningByLanguage[],
    note: string[],
    examples: Example[],

};

const FixedVocabularyModalBody = ({ kanji, hiragana, meaningsVocab }: FixedVocabularyModalBodyProps) => {
    return (
        <div className="flex flex-col">
            <span className="text-2xl text-danger">{kanji}</span>
            <span className="text-2xl text-linkSecondary">{hiragana}</span>
            {
                meaningsVocab.map((mean, index) =><)
            }
        </div>
    )
};

export default FixedVocabularyModalBody;
