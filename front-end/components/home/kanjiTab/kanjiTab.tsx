import React, { useState } from "react"

type AnalyzeKanji = {
    name: string,
    list: AnalyzeKanji[],
}

type KanjiProps = {
    kanji: string,
    onVocal: string[],
    kunVocal: string[]
    meaning: string[],
    numberOfStroke: number,
    svgImage: string,
    favorite: boolean,
    analyzeKanji: AnalyzeKanji,
}

type kanjiTabProps = {
    kanjisElement: KanjiProps[]

}

const KanjiTab = ({ text }: { text: string }) => {
    const [kanjis, setKanjis] = useState<KanjiProps[]>()
    return (
        <div className="flex flex-col">
            <div><span>{kanjis?.length} kết quả của Hán tự <span>{text}</span></span></div>
        </div>
    )
};

export default KanjiTab;
