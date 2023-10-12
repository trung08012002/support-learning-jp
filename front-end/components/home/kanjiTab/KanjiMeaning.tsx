import React from "react"
import { KanjiProps } from "./kanjiTab";

const KanjiMeaning = (word: KanjiProps) => {
    const { kanji, hanviet, onVocal, kunVocal, meaning, numberOfStroke, svgImage, favorite, analyzeKanji } = word;
    return (
        <div className="flex">
            <div className="flex flex-1 justify-between">
                <div className="flex flex-col items-start gap-1">
                    <span className="text-danger text-lg">{kanji}</span>
                    <span>{hanviet}</span>
                    <div className="flex"><span>On </span>{onVocal.map((vocal, index) => index == vocal.length - 1 ? <span key={index}>{vocal}</span> : <span key={index}>{vocal}、</span>)}</div>
                    <div className="flex"><span>Kun </span>{ }</div>
                </div>
            </div>
        </div>
    )
};

export default KanjiMeaning;
