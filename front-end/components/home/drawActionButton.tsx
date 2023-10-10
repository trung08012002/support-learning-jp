import React from "react"

type DrawActionButtonProps = {
    onClick: () => void,
    title: string,
}
const DrawActionButton = ({ onClick, title }: DrawActionButtonProps) => {
    return (
        <button onClick={onClick} className="z-2  inline-block rounded border-2 border-primary-100 px-2 pb-[6px] pt-2 text-xs 
        font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out bg-white
        hover:border-primary-accent-100 hover:bg-neutral-700 hover:bg-opacity-10 focus:border-primary-accent-100 
        focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 
        dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
            <span>{title}</span>
        </button>
    )
};

export default DrawActionButton;
