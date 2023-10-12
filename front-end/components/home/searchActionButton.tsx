import React, { useState } from "react"
import DrawingTool from "./drawtool";
import { IconButtonProps } from "./searchInput";
import { Action } from "./SearchWord";
import { useActionContext } from "./mainHome";

type SearchActionButtonProps = {
    index: number
    iconButton: IconButtonProps
}

const SearchActionButton = (props: SearchActionButtonProps) => {
    const { index, iconButton } = props;
    const { action, setAction } = useActionContext();
    const [isEven, setIsEven] = useState(true);
    const handleClick = () => {
        if (isEven) {
            iconButton.onClick();
        }
        else {
            setAction("");
        }
        setIsEven(!isEven);
    }
    return (
        <>
            <button key={index} onClick={handleClick} data-popover-target={iconButton.title} data-popover-trigger="click" type="button" title={iconButton.title} className="   font-medium rounded-lg text-sm px-2 py-2 ">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512" className="z-50 w-5 h-5">
                    {iconButton.icon}
                </svg>
            </button>

        </>

    )
};

export default SearchActionButton;
