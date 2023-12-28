import React from "react"


const GoogleWord = ({ text, googleWord }: { text: string, googleWord: string }) => {
    return (
        <div className="border border-blue-300 px-1 pt-3 pb-6 rounded-sm w-full flex flex-col">
            <div >{text}</div>
            <div>{googleWord}</div>
        </div>
    )
};

export default GoogleWord;
