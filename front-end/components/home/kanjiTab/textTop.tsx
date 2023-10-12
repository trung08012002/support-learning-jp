import React from "react"

type TextTopProps = {
    textTop: string,
    textBottom: string,
    cssBottom: string,
    cssTop: string,
}
const TextTop = ({ textTop, textBottom, cssBottom, cssTop }: TextTopProps) => {
    return (
        <span>
            <ruby className={cssBottom}>{textBottom}<rt className={cssTop}>{textTop}</rt></ruby>
        </span>
    )
};

export default TextTop;
