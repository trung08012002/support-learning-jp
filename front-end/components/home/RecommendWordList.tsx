"use client"
import { useQuery } from "@tanstack/react-query";
import useWord from "hooks/useWord";
import React, { useContext } from "react"
import { WordMeaning } from "types/word";
import { useActionContext } from "./mainHome";
import RecommendWord from "./RecommendWord";

interface Props {
    data: WordMeaning[],
    className?: string

}

const RecommendWordList = ({ data, className = "w-full  max-h-40  flex-none bg-white border overflow-y-auto shadow-sm rounded-sm  mt-2 absolute top-12 left-0" }: Props) => {

    return (
        <div className={className}>

            <ul>
                {
                    data.map((word: WordMeaning) =>
                        <li key={word.id}>
                            <RecommendWord word={word} />
                            <div className="h-[1px] my-1 bg-gray-200"></div>
                        </li>
                    )
                }
            </ul>

        </div>
    )
};

export default RecommendWordList;
