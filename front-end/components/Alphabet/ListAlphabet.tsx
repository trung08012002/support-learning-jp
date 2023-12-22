"use client";
import React, { useState } from "react";
import ItemChuCai from "./ItemChuCai";
import { ChuCai } from "types/chu_cai";
import { cn } from "lib/utils";
import clsx from "clsx";
import classNames from "classnames";
import * as Dialog from "@radix-ui/react-dialog";
import ExtendedItemChuCai from "./ExtendedItemChuCai";
export interface ExtendedChuCai extends ChuCai {
    active: boolean;
}
interface Props {
    orderChuCai: ExtendedChuCai[];
    classNameButton?: string;
}
const ListAlphabet = ({ orderChuCai, classNameButton }: Props) => {
    const [currentChucai, setCurrentChuCai] = useState<ExtendedChuCai | null>(
        null
    );
    const handleChoosenChuCai = (chucai: ExtendedChuCai | null) => {
        setCurrentChuCai(chucai);
    };
    return (
        <div className="grid grid-cols-5 gap-y-1.5 gap-x-2.5 relative">
            {orderChuCai.map((chucai, index) => (
                <Dialog.Root
                    key={index}
                    open={currentChucai != null && currentChucai?.id == chucai?.id}

                >
                    <Dialog.Trigger
                        className={classNameButton}
                        disabled={chucai == undefined}
                        onClick={() => handleChoosenChuCai(chucai)}
                    >
                        <ItemChuCai chucai={chucai} />
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay
                            className="bg-white/50 fixed top-0 left-0 right-0 bottom-0 grid overflow-y-auto place-items-center"
                        />
                        <Dialog.Content onPointerDownOutside={() => handleChoosenChuCai(null)} className="min-w-[40%] bg-white  z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="flex flex-col">
                                <div className="flex justify-between py-2 border-b-2 border-gray-100 pl-4 pr-3 pt-5">
                                    <div className="text-lg">Chữ cái</div>
                                    <Dialog.Close aria-label="Close" onClick={() => handleChoosenChuCai(null)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </Dialog.Close>
                                </div>
                                {currentChucai ? <ExtendedItemChuCai extendedChuCai={currentChucai as ExtendedChuCai} /> : null}
                            </div>

                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            ))}
        </div>
    );
};

export default ListAlphabet;
