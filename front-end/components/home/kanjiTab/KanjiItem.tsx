import React from "react"

type KanjiItemProps = {
    kanji: string,
    hanviet: string,
    meaning: string
    choosen: boolean,
    onclick: () => void
}

const KanjiItem = ({ kanji, hanviet, meaning, choosen, onclick }: KanjiItemProps) => {
    return (
        <button className={`border-2 ${choosen ? "border-borderChoosing" : "border-borderNomal"} hover:border-borderChoosing flex flex-col w-fit p-2 rounded-sm`} onClick={() => onclick()}>

            <span className="text-xl">{kanji}</span>
            <span className=" text-xl">{hanviet}</span>
            <span className="text-base">{meaning}</span>

        </button>
    )
};

export default KanjiItem;
