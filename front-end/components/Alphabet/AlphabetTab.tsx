import React, { useEffect, useMemo, useRef, useState } from "react"
import { CustomTabTheme } from "../home/mainHome";
import { Tabs, TabsRef } from "flowbite-react";
import ItemChuCai from "./ItemChuCai";

import useHiragana from "hooks/useHiragana";
import useKatakana from "hooks/useKatakana";
import { keyBy } from "lodash";
import ListAlphabet from "./ListAlphabet";
const AlphabetTab = () => {
    const tabsRef = useRef<TabsRef>(null);
    const tablePhatAm = [
        ["a", "i", "u", "e", "o"],
        ["ka", "ki", "ku", "ke", "ko"],
        ["sa", "shi", "su", "se", "so"],
        ["ta", "chi", "tsu", "te", "to"],
        ["na", "ni", "nu", "ne", "no"],
        ["ha", "hi", "fu", "he", "ho"],
        ["ma", "mi", "mu", "me", "mo"],
        ["ya", "", "yu", "", "yo"],
        ["ra", "ri", "ru", "re", "ro"],
        ["wa", "", "o", "", "n"],
    ]
    const [activeTab, setActiveTab] = useState<0 | 1>(0);

    const [textSearch, setTextSearch] = useState<string>('');

    const hiraganaData = useHiragana();
    const katakanaData = useKatakana();
    const orderHiragana = useMemo(() => {

        const extendedHiragana = keyBy(hiraganaData.data?.data, "phien_am")

        return tablePhatAm.flatMap((hangphatam) => {
            return hangphatam.map((phatam) => {
                const chucai = extendedHiragana[phatam]
                if (chucai === undefined) {
                    return chucai
                }
                if (textSearch != '' && chucai?.phien_am.includes(textSearch) || chucai.chu_cai == textSearch) {
                    return { ...chucai, active: true }
                }
                return { ...chucai, active: false };
            })
        })
    }, [hiraganaData.data?.data, textSearch])
    const orderKatakana = useMemo(() => {
        const extendedKatakana = keyBy(katakanaData.data?.data, "phat_am")
        return tablePhatAm.flatMap((hangphatam) => {
            return hangphatam.map((phatam) => {
                const chucai = extendedKatakana[phatam]
                if (chucai === undefined) {
                    return chucai
                }
                if (chucai?.phien_am.includes(textSearch) || chucai.chu_cai == textSearch) {
                    return { ...chucai, active: true }
                }
                return { ...chucai, active: false };
            })
        })
    }, [katakanaData.data?.data, textSearch])
    const handleSubmit = (activeTab: 0 | 1) => {
        const cal = {

            0: () => { },
            1: () => { },
        }

        cal[activeTab]();
    }
    const handleOnChangeTextSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setTextSearch(value);
    }
    useEffect(() => {
        Promise.all([hiraganaData.refetch(), katakanaData.refetch()])

    }, [])
    return (
        <div className="mt-2  w-full mr-4 pr-4">
            <form
                className="flex justify-center items-center"
                onSubmit={(event) => {
                    event.preventDefault()
                    handleSubmit(activeTab)
                }}>
                <input onChange={handleOnChangeTextSearch} className="border-2 border-gray-500 px-3 py-2 outline-none rounded-md w-1/2 sm:w-1/3" placeholder="a, あ" />
            </form>
            <Tabs.Group
                className="mx-auto"
                ref={tabsRef}
                theme={CustomTabTheme}
                aria-label="Tabs with underline"
                style="underline"
                onActiveTabChange={(tab) => setActiveTab(tab as 0 | 1)}
            >

                <Tabs.Item

                    active
                    onClick={() => tabsRef.current?.setActiveTab(0)}
                    title="Hiragana"
                >
                    {
                        <ListAlphabet orderChuCai={orderHiragana} />
                    }
                </Tabs.Item>
                <Tabs.Item
                    active
                    onClick={() => tabsRef.current?.setActiveTab(1)}
                    title="Katakana"
                >
                    {
                        <ListAlphabet orderChuCai={orderKatakana} />
                    }
                </Tabs.Item>
            </Tabs.Group>


        </div>
    )
};

export default AlphabetTab;
