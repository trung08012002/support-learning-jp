import React from "react"
import { Example } from "types/word";


const ExampleItem = ({ example }: { example: Example }) => {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-danger text-xl">{example.sentence}</span>
            <span className="text-success text-lg">{example.meanOfExample}</span>
        </div>
    )
};

export default ExampleItem;
