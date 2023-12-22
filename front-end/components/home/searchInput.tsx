"use client"
import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react"
import SearchActionButton from "./searchActionButton";
import DrawingTool from "./drawtool";
import { useActionContext } from "./mainHome";
import { Action } from "./SearchWord";
import useWord from "hooks/useWord";
import RecommendWordList from "./RecommendWordList";
import useOuterClick from "hooks/useOuterClick";
import AudioVoiceRecorder from "./audioVoiceRecorder/audioVoiceRecorder";
import useKanji from "hooks/useKanji";



export type IconButtonProps = {
    title: string,
    onClick: () => void,
    icon: ReactNode,
}

export type SearchInputProps = {
    textSearch: string,
    setTextSearch: React.Dispatch<React.SetStateAction<string>>,
    listIconButton: IconButtonProps[],

}

const SearchInput = ({ textSearch, setTextSearch, listIconButton }: SearchInputProps) => {

    const { action, activeTab } = useActionContext();

    const recommendWord = useWord({ word: textSearch });
    const [isRecommend, setIsRecommend] = useState(false);
    const handleOpen = () => {
        if (isRecommend == false) {
            setIsRecommend(true);
        }
    }
    const handleClose = () => {

        if (isRecommend == true) {
            setIsRecommend(false)
        }
    }
    const kanji = useKanji({ kanji: textSearch });

    const isOpenRecommendVocabulary = useMemo(() => activeTab == 0 && recommendWord.data && recommendWord.data.length > 0 && isRecommend == true && textSearch != "", [isRecommend, textSearch, activeTab, recommendWord],);

    const innerRef = useOuterClick({ callback: handleClose });
    const handleSubmit = (activeTab: 0 | 1 | 2 | 3) => {
        const call = {
            0: () => recommendWord.refetch(),
            1: () => { },
            2: () => { },
            3: () => { }
        }
        call[activeTab]()
    }
    return (
        <div ref={innerRef} className="relative block">

            {
                recommendWord.isLoading ? (
                    <div className="absolute z-10 left-0 top-1/2 -translate-y-1/2 inset-y-0  pl-3">
                        <svg aria-hidden="true" className=" w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>


                ) : (
                    <button type="submit" className="absolute z-10 left-0 top-1/2 -translate-y-1/2  flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </button>
                )
            }


            <input onFocus={handleOpen} value={textSearch} onChange={(e) => {

                setTextSearch(e.target.value)
                handleSubmit(activeTab);
            }

            } type="text" id="searchtext" className="w-full py-4 p-48  pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />

            {isOpenRecommendVocabulary ? <RecommendWordList data={recommendWord.data || []} /> : null}

            <div className="absolute right-1 
                    bottom-2.5 flex items-center">
                {textSearch !== "" ? <button onClick={() => setTextSearch("")}><img className="w-4 h-4" alt="" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e" /></button> : null}
                {

                    listIconButton.map((iconButton, index) => <SearchActionButton key={index} index={index} iconButton={iconButton} />)
                }

            </div>
            {action === Action.NDCV ? <div className={`absolute  w-full top-14 right-0 block bg-slate-600 z-10 transition-opacity ${action === Action.NDCV ? "opacity-100" : "opacity-0"}`}>
                <DrawingTool />
            </div> : null}
            {action === Action.NDGN ? <div className={`absolute h-[10rem]  w-full top-14 right-0 block bg-white z-10 transition-opacity ${action === Action.NDGN ? "opacity-100" : "opacity-0"}`}>
                <div className=" h-full flex items-center justify-center">
                    <AudioVoiceRecorder setTextSearch={setTextSearch} />
                </div>
            </div> : null}
        </div>
    )
};

export default SearchInput;
