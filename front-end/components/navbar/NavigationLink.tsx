"use client";
import Link from "next/link";

import React, { ReactElement, useState } from "react";
import { usePathname } from "next/navigation";

type NavigationLinkProps = {
    href: string;
    icon: ReactElement;

    name: string;
};
const NavigationLink = ({ href, icon, name }: NavigationLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    // (href === "/home" ? "/" : href);

    return (
        <>
            <div
                className={`relative
               
                before:content-[attr(data-tip)]
                before: z-20
before:absolute
before:px-3
before:py-2
before:left-1/2
before:top-20

before:w-max before:max-w-xs
before:-translate-y-full
before:-translate-x-1/2
before:bg-gray-500 
before:text-white
before:rounded-md
 before:opacity-0
before:transition-all

                after:absolute
                after:left-1/2 after:-bottom-5
                after:h-0 after:w-0
                after:-translate-x-1/2 after:border-8
                after:border-t-gray-500
                after:border-l-transparent
                after:border-b-transparent
                after:border-r-transparent
                after:opacity-0
                after:transition-all
                
                hover:before:opacity-100
                hover:after:opacity-100
                
    `}
                data-tip={name}
            >
                <Link href={href === "/home" ? "/" : href}>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon={name}
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className={`h-6 w-6  ${isActive ? "fill-blue-500" : ""
                            } hover:fill-blue-500`}
                    >
                        {icon}
                    </svg>
                </Link>
            </div>
        </>
    );
};

export default NavigationLink;
