import React from "react"
import MeaningVocabByLanguage, { ExampleByLanguage } from "./MeaningVocabByLanguage";
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
    examples: ExampleByLanguage[],

};

const FixedVocabularyModalBody = ({ kanji, hiragana, meaningsVocab }: FixedVocabularyModalBodyProps) => {
    return (
        <div className="flex flex-col">
            <span className="text-2xl text-danger">{kanji}</span>
            <span className="text-2xl text-linkSecondary">{hiragana}</span>
            {
                meaningsVocab.map((mean, index) => <MeaningVocabByLanguage key={index} title={mean.title} meaning={mean.meaning}
                    note={mean.note} examples={mean.examples} index={index + 1} />)
            }
        </div>
    )
};

export default FixedVocabularyModalBody;
