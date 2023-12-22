import Link from "next/link";
import React, { ReactElement } from "react"

type SideBarItemProps = {
    Icon: ReactElement,
    title: string,
    href: string,
}

const SideBarItem = ({ Icon, title, href }: SideBarItemProps) => {
    return (

        <Link href={href} className="flex items-center space-x-2 hover:bg-slate-400 ml-2 px-2 py-1">
            {Icon}
            <span className="">{title}</span>
        </Link>

    )
};

export default SideBarItem;
