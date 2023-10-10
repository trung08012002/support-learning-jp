import React, { ReactElement } from "react"

type SideBarItemProps = {
    Icon: ReactElement,
    title: String,
}

const SideBarItem = ({ Icon, title }: SideBarItemProps) => {
    return (

        <div className="flex items-center space-x-2 hover:bg-slate-400 ml-2 px-2 py-1">
            {Icon}
            <span className="">{title}</span>
        </div>

    )
};

export default SideBarItem;
