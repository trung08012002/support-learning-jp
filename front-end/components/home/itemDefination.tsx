import React from "react"

import ExampleItem from "./exampleItem";
import { DetailWord } from "types/word";

type ItemDefinationProps = {
    index: number,
    defination: DetailWord,
}

const ItemDefination = ({ index, defination }: ItemDefinationProps) => {

    return (
        <div className="flex">
            <span>{index}.</span>
            <div className="ml-2 flex flex-col gap-[2px]">
                {defination.typeWords && defination.typeWords.map((type, index) => <span key={type.id}>{type.type}</span>)}
                {defination.meaningDetails && defination.meaningDetails.map((mean, index) => <span key={index} className="text-blueText text-lg">{mean.meaningDetail}</span>)}
                {defination.exampleDetails && defination.exampleDetails.map((example, index) => <ExampleItem key={example.idDetail} example={example} />)}
            </div>
        </div>
    )
};

export default ItemDefination;
