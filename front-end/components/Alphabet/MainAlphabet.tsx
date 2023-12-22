'use client'
import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../Accordion/Accordion";
import AlphabetTab from "./AlphabetTab";



const MainAlphabet = () => {




    return (
        <div className="w-full h-full">
            <div className=" shadow-lg  bg-slate-50 p-4">
                <Accordion type="single" collapsible className="block bg-white z-40 shadow w-full" >
                    <AccordionItem value="item-1" className="w-full ">
                        <div className="   bg-white border border-gray-200 rounded-sm overflow-hidden ">
                            <div className="w-full h-full flex flex-col">
                                <AccordionTrigger className="w-full px-6 border-b border-zinc-300">
                                    Giới thiệu
                                </AccordionTrigger>
                                <AccordionContent className="px-6 py-5">
                                    <div className="flex flex-col gap-2">
                                        <div className="text-base">Gợi ý: Bạn có thể click vào từng từ tiếng Nhật được bôi đậm để nghe cách đọc.</div>
                                        <div className="text-2xl ">Tiếng Nhật gồm 3 bảng chữ cái:<b>Hiragana</b>, <b>Katakana</b> và <b>Kanji (Hán tự)</b>.</div>
                                        <div className="text-base "><b>1 ) Hiragana</b>: Bảng chữ <b>tượng thanh</b>, mỗi chữ tương ứng với 1 âm.</div>
                                        <div className="text-base ">• Ví dụ: いち đọc là /ichi/, được ghép từ 2 chữ い(i) và ち(chi).</div>
                                        <div className="text-base "><b>2) Katakana</b>: Giống với Hiragana là bảng chữ <b>tượng thanh</b>, nhưng hay dùng để viết <b>từ mượn</b> hay nhấn mạnh từ.</div>
                                        <div className="text-base">• Ví dụ: <b>テスト</b> (đọc là /tesuto/), có ngĩa là bài kiểm tra, được mượn từ từ test trong tiếng Anh.</div>
                                        <div className="text-base">3) <b>Kanji (Hán tự)</b>: Là bảng chữ <b>tượng hình</b> (biểu thị ý nghĩa bằng hình ảnh), được mượn từ chữ Hán của Trung Quốc.</div>
                                        <div className="text-base">• Ví dụ: 3 hán tự 一, 二, 三 có 1, 2, 3 nét tương ứng với số 1, 2, 3.</div>
                                        <div className="text-base">Ở phần này, chúng ta sẽ học về 2 bảng Hiragana và Katakana.</div>
                                        <div className="text-base">Mỗi chữ đều được tạo thành từ 5 nguyên âm <b>あ, い, う, え, お</b> (a, i, u, e, o) trừ chữ cuối là âm mũi <b>ん</b>(n).</div>
                                    </div>
                                </AccordionContent>
                            </div>
                        </div>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="w-full">
                        <div className="   bg-white border border-gray-200 rounded-sm overflow-hidden ">
                            <div className="w-full h-full flex flex-col">
                                <AccordionTrigger className="w-full px-6 border-b border-zinc-300">
                                    Ghi nhớ
                                </AccordionTrigger>
                                <AccordionContent className="px-6 py-5">
                                    <div className=" w-full min-h-screen">
                                        <AlphabetTab />
                                    </div>

                                </AccordionContent>
                            </div>
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
};

export default MainAlphabet;
