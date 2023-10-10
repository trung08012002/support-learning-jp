import React from "react"

import { ExampleByLanguage } from "./MeaningVocabByLanguage";

const ExampleItemByLanguage = ({ example }: { example: ExampleByLanguage }) => {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-danger text-xl">{example.sentence}</span>
            <span className="text-success text-lg">{example.meanOfExampleByEN}</span>
            <input defaultValue={example.meanOfExampleByVN}></input>
        </div>
    )
};

export default ExampleItemByLanguage;
