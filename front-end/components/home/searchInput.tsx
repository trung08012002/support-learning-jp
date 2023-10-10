import React, { ReactNode, useState } from "react"

type IconButtonProps = {
    title: string,
    onClick: () => void,
    icon: ReactNode,
}

type SearchInputProps = {
    textSearch: string,
    setTextSearch: React.Dispatch<React.SetStateAction<string>>,
    listIconButton: IconButtonProps[],

}
const SearchInput = ({ textSearch, setTextSearch, listIconButton }: SearchInputProps) => {
    const [active, setActive] = useState(-1);
    return (
        <div className="relative ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>

            </div>
            <input type="text" id="searchtext" className="block w-full py-4 p-48  pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
            <div className="absolute right-1 
                    bottom-2.5 flex ">
                {textSearch !== "" ? <svg id="Layer_1" version="1.1" viewBox="0 0 20 20" width="20px" xmlns="http://www.w3.org/2000/svg" ><path d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z" /></svg> : null}
                {

                    listIconButton.map((iconButton, index) => <>
                        <button key={index} data-popover-target={iconButton.title} data-popover-trigger="click" type="button" title={iconButton.title} className="   font-medium rounded-lg text-sm px-2 py-2 ">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512" className="z-50 w-5 h-5">
                                {iconButton.icon}
                            </svg>
                        </button>
                    </>)
                }

            </div>

        </div>
    )
};

export default SearchInput;
