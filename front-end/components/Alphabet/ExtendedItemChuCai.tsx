import React, { useEffect, useRef } from "react"
import { ExtendedChuCai } from './ListAlphabet';

interface Props {
    extendedChuCai: ExtendedChuCai
}

const ExtendedItemChuCai = ({ extendedChuCai }: Props) => {

    return (
        <div className="flex">
            <div className="w-[240px] h-[240px]">
                <img src={extendedChuCai.img} />
            </div>
            <div className="flex flex-col gap-2">
                <div>Chữ cái</div>
                <div className="text-lg text-red">{extendedChuCai.chu_cai}</div>
                <div >Phiên âm</div>
                <div className="text-blue">{extendedChuCai.phien_am}</div>
            </div>
        </div>
    )
};

export default ExtendedItemChuCai;
