import React from "react"
import { Defination } from "./vocabularyTab";
import ExampleItem from "./exampleItem";

type ItemDefinationProps = {
    index: number,
    defination: Defination,
}

const ItemDefination = ({ index, defination }: ItemDefinationProps) => {
    return (
        <div className="flex">
            <span>{index}.</span>
            <div className="ml-2 flex flex-col gap-[2px]">
                <span >{defination.title}</span>
                {defination.meaning.map((mean, index) => <span key={index} className="text-blueText text-lg">{mean}</span>)}
                {defination.examples.map((example, index) => <ExampleItem key={index} example={example} />)}
            </div>
        </div>
    )
};

export default ItemDefination;
