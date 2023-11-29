import React from "react"
export type LabelItemProps = {
    title: string,
    value: string,
}
const LabelItem = ({ title, value }: LabelItemProps) => {
    return (
        <div className="flex flex-col">
            <span className="bg-grayBackground rounded ">{title}</span>
            <span className="text-blueText mt-1 text-xl">{value}</span>
        </div>
    )
};

export default LabelItem;
