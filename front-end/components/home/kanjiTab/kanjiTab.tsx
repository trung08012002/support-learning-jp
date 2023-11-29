import React, { useMemo, useState } from "react"
import KanjiItem from "./KanjiItem"
import KanjiMeaning from "./KanjiMeaning"
import { Kanji } from "types/kanji"



const KanjiTab = ({ text, kanjis }: { text: string, kanjis: Kanji[] }) => {

    const [kanjiActive, setKanjiActive] = useState(0);
    const activeKanji = useMemo(() => kanjis[kanjiActive], [kanjis, kanjiActive])
    const onClick = (id: string) => {
        const index = kanjis.findIndex((kanji) => kanji.id === id)

        setKanjiActive(index);
    }
  
    return (
        <div className="flex flex-col ">
            {
                kanjis.length > 0 ? (
                    <>
                        <span>{kanjis?.length} kết quả của Hán tự <span>{text}</span></span>
                        <div
                            className="flex overflow-x-auto my-2 gap-1"
                        >
                            {
                                kanjis.map((word, index) => <KanjiItem key={word.id}
                                    kanji={word.tu} hanviet={word.hanviets.join("、")} meaning={word.hanTuMeanings.join("、")} choosen={kanjiActive == index}
                                    onclick={() => {

                                        onClick(word.id)
                                    }}
                                />)
                            }
                        </div>
                        <KanjiMeaning word={activeKanji} />
                    </>

                ) : null
            }
        </div>
    )
};

export default KanjiTab;
