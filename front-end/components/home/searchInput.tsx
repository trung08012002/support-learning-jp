import React, { ReactNode, useState } from "react"
import SearchActionButton from "./searchActionButton";
import DrawingTool from "./drawtool";
import { useActionContext } from "./mainHome";
import { Action } from "./SearchWord";


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

    const { action } = useActionContext();


    return (
        <div className="relative block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>

            </div>
            <input value={textSearch} onChange={(e) => setTextSearch(e.target.value)} type="text" id="searchtext" className="block w-full py-4 p-48  pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
            <div className="absolute right-1 
                    bottom-2.5 flex items-center">
                {textSearch !== "" ? <button onClick={() => setTextSearch("")}><img className="w-4 h-4" alt="" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e" /></button> : null}
                {

                    listIconButton.map((iconButton, index) => <SearchActionButton key={index} index={index} iconButton={iconButton} />)
                }

            </div>
            <div className={`absolute w-full top-12 right-0 block bg-slate-600 z-10 transition-opacity ${action === Action.NDCV ? "opacity-100" : "opacity-0"}`}>
                <DrawingTool />
            </div>

        </div>
    )
};

export default SearchInput;
