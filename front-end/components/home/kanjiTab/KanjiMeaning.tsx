import React from "react"

import LabelItem from "./labelItem";
import { Kanji } from "types/kanji";

const KanjiMeaning = ({ word }: { word: Kanji }) => {
    const { tu: kanji, hanviets, amOn, amKun, numberOfStroke, hanTuMeanings } = word;
    return (
        <div className="flex">
            <div className="flex flex-1 justify-between">
                <div className="flex flex-col items-start gap-2">
                    <span className="text-danger text-2xl">{kanji}</span>
                    <div className="flex text-3xl"><span>{hanviets.join(" , ")}</span></div>
                    <div className="flex text-xl"><span className="mr-2">On </span><span>{amOn.join("、")}</span></div>
                    <div className="flex text-xl"><span className="mr-1">Kun </span><span>{amKun.join("、")}</span></div>
                    <LabelItem title="Ý nghĩa" value={hanTuMeanings.join("、")} />
                    <LabelItem title="Số nét" value={numberOfStroke.toString()} />

                </div>
            </div>
        </div>
    )
};

export default KanjiMeaning;
