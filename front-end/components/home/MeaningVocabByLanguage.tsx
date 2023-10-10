import React from "react"

import ExampleItem from "./exampleItem";
import { MeaningByLanguage } from "./fixedVocabularyModalBody";
import ExampleItemByLanguage from "./exampleItemByLanguage";
export type ExampleByLanguage = {
  sentence: string,
  meanOfExampleByVN: string,
  meanOfExampleByEN: string,
}

export type MeaningVocabLanguage = {
  title: string,
  meaning: MeaningByLanguage[],
  note: string[],
  examples: ExampleByLanguage[],
};
type MeaningVocabByLanguageProps = MeaningVocabLanguage & { index: number };
const MeaningVocabByLanguage = ({ title, meaning, note, examples, index }: MeaningVocabByLanguageProps) => {
  return (
    <div className="flex">
      <span>{index}.</span>
      <div className="ml-2 flex flex-col gap-[2px]">
        <span >{title}</span>
        {meaning.map((mean, index) => <div className="flex flex-col" key={index} >
          <span className="text-blueText text-lg">{mean.english}</span>
          <input defaultValue={mean.vietnamese}></input>
        </div>)}
        {examples.map((example, i) => <ExampleItemByLanguage key={i} example={example} />)}
      </div>
    </div>
  )
};

export default MeaningVocabByLanguage;
