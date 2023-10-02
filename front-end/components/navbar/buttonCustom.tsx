import React, { ReactElement } from "react"

type ButtonCustomProps = {
    textColor: string,
    backgroundColor: string,
    backgroundColorHover: string,
    icon?: ReactElement,
    text?: string,
    onClick: () => void,
}
const ButtonCustom = ({ textColor, backgroundColor, backgroundColorHover, text, icon, onClick }: ButtonCustomProps) => {

    return (
        <button onClick={onClick} type="button"
            className={`${textColor} ${backgroundColor} hover:${backgroundColorHover}  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center`}

        >
            <div className="flex items-center">
                {icon}
                {text}
            </div>
        </button>
    )
};

export default ButtonCustom;
