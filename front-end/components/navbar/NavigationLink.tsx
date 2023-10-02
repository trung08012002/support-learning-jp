"use client"
import Link from "next/link";

import React, { ReactElement } from "react"
import { usePathname } from 'next/navigation';

type NavigationLinkProps = {
    href: string,
    icon: ReactElement,

    name: string
}
const NavigationLink = ({ href, icon, name }: NavigationLinkProps) => {


    const pathname = usePathname();
    const isActive = pathname === (href === "/home" ? "/" : href)
    return (
        <>
            <button data-tooltip-target="tooltip-bottom"

                data-te-ripple-init
                data-te-ripple-color="light" data-tooltip-trigger="hover" data-tooltip-placement="bottom" type="button" >
                <Link href={href === "/home" ? "/" : href} >
                    {icon}

                </Link>
            </button>
            <div id="tooltip-bottom" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                {name}
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </>
    );
};

export default NavigationLink;
