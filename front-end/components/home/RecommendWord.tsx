import React, { useEffect } from "react"
import { MeaningDetail, WordMeaning } from "types/word";
import { useActionContext } from "./mainHome";
import { useQuery } from "@tanstack/react-query";
import { getWord } from "api/words.api";
import useVocabulary from "hooks/useVocabulary";

const RecommendWord = ({ word, classButton = "hover:bg-slate-100 p-2 w-full" }: { word: WordMeaning, classButton?: string }) => {

    const { setCurrentWord } = useActionContext();
    const { refetch } = useVocabulary(word.tu, word.hiragana);



    return (
        <button className={classButton} onClick={() => {

            refetch().then((data) => setCurrentWord(data.data?.data ?? null))
        }}>
            <div className="flex flex-col justify-start items-start">
                <div className="flex items-center gap-2">
                    <span >{word.tu}</span>
                    <span>{word.hiragana}</span>
                </div>
                <div className="whitespace-nowrap">
                    {
                        word.meaningDetails.map((meaningDetail, index) => {
                            if (index !== word.meaningDetails.length - 1) {
                                return <span key={index} >{meaningDetail} , </span>
                            }
                            return <span key={index}>{meaningDetail}</span>
                        })
                    }
                </div>
            </div>
        </button>
    )
};

export default RecommendWord;
