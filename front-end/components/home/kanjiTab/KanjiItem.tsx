import React from "react"

type KanjiItemProps = {
    kanji: string,
    hanviet: string,
    meaning: string[]
    choosen: boolean
}

const KanjiItem = ({ kanji, hanviet, meaning, choosen }: KanjiItemProps) => {
    return (
        <div className={`border-2 ${choosen ? "border-borderChoosing" : "border-borderNomal"} hover:border-borderChoosing flex flex-col w-fit p-1`}>
            <span className="text-base">{kanji}</span>
            <span className="text-base">{hanviet}</span>
            <span className="text-base">{meaning}</span>
        </div>
    )
};

export default KanjiItem;
