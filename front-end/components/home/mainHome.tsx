"use client"
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"


import { Tabs, TabsRef } from 'flowbite-react';

import VocabularyTab from "./vocabularyTab";
import SearchWord from "./SearchWord";

import { Vocabulary } from "types/word";
import useWord from "hooks/useWord";
import useGoogleTranSlate from "hooks/useGoogle";
import useVocabulary from "hooks/useVocabulary";
import useGetFirstWordOfSentence from "hooks/useGetFirstWordOfSentencce";
import useKanji from "hooks/useKanji";
import KanjiTab from "./kanjiTab/kanjiTab";
import GoogleWord from "./googleWord";
;

// create an array of objects with the id, trigger element (eg. button), and the content element
export const CustomTabTheme = {
    "base": "flex flex-col gap-2",
    "tablist": {
        "base": "flex text-center",
        "styles": {
            "default": "flex-wrap border-b border-gray-200 dark:border-gray-700",
            "underline": " flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
            "pills": "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
            "fullWidth": "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none"
        },
        "tabitem": {
            "base": "flex items-center justify-center p-5 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500  focus:outline-none",
            "styles": {
                "default": {
                    "base": "rounded-t-lg",
                    "active": {
                        "on": "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
                        "off": "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300"
                    }
                },
                "underline": {
                    "base": "rounded-t-lg ",
                    "active": {
                        "on": "text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500",
                        "off": "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                    }
                },
                "pills": {
                    "base": "",
                    "active": {
                        "on": "rounded-lg bg-cyan-600 text-white",
                        "off": "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                    }
                },
                "fullWidth": {
                    "base": "ml-0 first:ml-0 w-full rounded-none flex",
                    "active": {
                        "on": "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
                        "off": "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none"
                    }
                }
            },
            "icon": "mr-2 h-5 w-5"
        }
    },
    "tabitemcontainer": {
        "base": "",
        "styles": {
            "default": "",
            "underline": "mt-14",
            "pills": "",
            "fullWidth": ""
        }
    },
    "tabpanel": "py-3"
}



export type ActionContext = {
    activeTab: 0 | 1 | 2 | 3,
    action: string,
    setAction: React.Dispatch<React.SetStateAction<string>>,
    setCurrentWord: React.Dispatch<React.SetStateAction<Vocabulary | null>>
}

export const ActionContext = React.createContext<ActionContext>({
    activeTab: 0,
    action: "",
    setAction: () => { },
    setCurrentWord: () => { }
});
export const useActionContext = () => useContext(ActionContext);
const MainHome = () => {
    const [activeTab, setActiveTab] = useState<0 | 1 | 2>(0);

    const tabsRef = useRef<TabsRef>(null);
    const [action, setAction] = useState("");
    useEffect(
        () => {
            setAction("");
        }
        , [activeTab])
    const [textSearch, setTextSearch] = useState("");
    const [currentWord, setCurrentWord] = useState<Vocabulary | null>(null)
    const [googleWord, setGoogleWord] = useState<string | null>(null)
    const [tu, setTu] = useState<string | null>(null)
    const recommendWord = useWord({ word: textSearch });

    const translateWord = useGoogleTranSlate({ word: textSearch });
    const { refetch } = useVocabulary(recommendWord.data?.[0]?.tu ?? "", recommendWord.data?.[0]?.hiragana ?? "");
    const getFirstWordOfSentence = useGetFirstWordOfSentence({ word: textSearch })
    const handleSubmitGoogle = async () => {
        const translateData = await translateWord.refetch()
        setGoogleWord(translateData.data ?? null)
    }
    const handleSubmitVocabulary = (): void => {
        if (recommendWord.data == undefined || recommendWord.data.length == 0) {
            Promise.all([
                translateWord.refetch(),
                getFirstWordOfSentence.refetch()
            ]).then(([translateData, firstWordData]) => {
                const googleWord = translateData.data ?? null;
                const currentWord = firstWordData.data?.data ?? null;
                setGoogleWord(googleWord)
                setCurrentWord(currentWord)
                setTu(textSearch)
            });
        }
        else {
            setGoogleWord(null);
            setTu(textSearch)
            refetch().then((data) => setCurrentWord(data.data?.data ?? null))
        }
    }
    const kanji = useKanji({ kanji: tu ?? "" });
    const handleSubmitKanji = () => {
        setTu(textSearch)
        kanji.refetch();
    }
    const handleSubmit = (activeTab: 0 | 1 | 2) => {
        const cal = {
            0: handleSubmitVocabulary,
            1: handleSubmitKanji,
            2: handleSubmitGoogle,

        }

        cal[activeTab]();
    }
    return (
        <div className="relative rounded overflow-hidden w-4/5  min-h-full  shadow-lg  bg-slate-50 p-4   ">
            <div className=" mt-2 absolute top-20  w-full mr-4 pr-4">

                <ActionContext.Provider value={{ action, setAction, setCurrentWord, activeTab }}>
                    <form onSubmit={(event) => {
                        event.preventDefault()
                        handleSubmit(activeTab)
                    }}>
                        <SearchWord textSearch={textSearch} setTextSearch={setTextSearch} />
                    </form>
                </ActionContext.Provider>

            </div>

            <Tabs.Group
                ref={tabsRef}
                theme={CustomTabTheme}
                aria-label="Tabs with underline"
                style="underline"
                onActiveTabChange={(tab) => setActiveTab(tab as 0 | 1 | 2)}
            >

                <Tabs.Item
                    active
                    onClick={() => tabsRef.current?.setActiveTab(0)}
                    title="Từ vựng"
                >
                    <VocabularyTab text={tu ?? ""} vocabulary={currentWord} googleWord={googleWord} recommendWord={recommendWord.data} />

                    {/* <AudioPlayer src="https://jpdictionary.com/upload/audios/64e5e1cb48c5e.mp3" icon={
                        <path data-v-61d984ab="" fill="black" d="M412.6 182c-10.28-8.334-25.41-6.867-33.75 3.402c-8.406 10.24-6.906 25.35 3.375 33.74C393.5 228.4 400 241.8 400 255.1c0 14.17-6.5 27.59-17.81 36.83c-10.28 8.396-11.78 23.5-3.375 33.74c4.719 5.806 11.62 8.802 18.56 8.802c5.344 0 10.75-1.779 15.19-5.399C435.1 311.5 448 284.6 448 255.1S435.1 200.4 412.6 182zM473.1 108.2c-10.22-8.334-25.34-6.898-33.78 3.34c-8.406 10.24-6.906 25.35 3.344 33.74C476.6 172.1 496 213.3 496 255.1s-19.44 82.1-53.31 110.7c-10.25 8.396-11.75 23.5-3.344 33.74c4.75 5.775 11.62 8.771 18.56 8.771c5.375 0 10.75-1.779 15.22-5.431C518.2 366.9 544 313 544 255.1S518.2 145 473.1 108.2zM534.4 33.4c-10.22-8.334-25.34-6.867-33.78 3.34c-8.406 10.24-6.906 25.35 3.344 33.74C559.9 116.3 592 183.9 592 255.1s-32.09 139.7-88.06 185.5c-10.25 8.396-11.75 23.5-3.344 33.74C505.3 481 512.2 484 519.2 484c5.375 0 10.75-1.779 15.22-5.431C601.5 423.6 640 342.5 640 255.1S601.5 88.34 534.4 33.4zM301.2 34.98c-11.5-5.181-25.01-3.076-34.43 5.29L131.8 160.1H48c-26.51 0-48 21.48-48 47.96v95.92c0 26.48 21.49 47.96 48 47.96h83.84l134.9 119.8C272.7 477 280.3 479.8 288 479.8c4.438 0 8.959-.9314 13.16-2.835C312.7 471.8 320 460.4 320 447.9V64.12C320 51.55 312.7 40.13 301.2 34.98z" ></path>
                    } /> */}
                </Tabs.Item>
                <Tabs.Item
                    onClick={() => tabsRef.current?.setActiveTab(1)}
                    title="Hán tự"
                >
                    <KanjiTab text={tu ?? ""} kanjis={kanji.data ?? []} />
                </Tabs.Item>

                <Tabs.Item
                    onClick={() => tabsRef.current?.setActiveTab(2)}
                    title="Dịch"

                >
                    {googleWord && <GoogleWord text={tu || ""} googleWord={googleWord} />
                    }
                </Tabs.Item>

            </Tabs.Group>
        </div >
    )
};

export default MainHome;
