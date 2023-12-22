import React from "react"
import { ChuCai } from "types/chu_cai";
import { ExtendedChuCai } from "./ListAlphabet";
import classNames from "classnames";



interface Props {
  chucai?: ExtendedChuCai
  className?: string,
  classNameWrapper?: string
  classFirstString?: string,
  classSecondString?: string
}

const ItemChuCai = ({ chucai,
  className = "col-span-1 ",
  classNameWrapper = "flex flex-col items-center justify-center border-2 border-green-300 hover:bg-pink-100",
  classFirstString = "text-4xl font-medium",
  classSecondString = "text-xl text-brown"
}: Props) => {
  return (
    <div className={className}>
      {
        chucai != undefined ? (
          <div className={classNames(classNameWrapper, { 'bg-pink-100': chucai.active, 'bg-white': !chucai.active })}>
            <div className={classFirstString}>{chucai?.chu_cai}</div>
            <div className={classSecondString}>{chucai?.phien_am}</div>
          </div>
        ) : null

      }

    </div>
  )
};

export default ItemChuCai;
