"use client"
import React, { useMemo } from "react"
import AudioPlayer from "./audioPlayer";
import ItemDefination from "./itemDefination";
import FixedTranslation from "./fixedTranslation";
import { Vocabulary, WordMeaning } from "types/word";
import RecommendWord from "./RecommendWord";
import ButtonToOtherWebsite from "./buttonToOtherWebsite";



const VocabularyTab = ({ text, vocabulary, recommendWord, googleWord }: { googleWord: string | null, text: string, vocabulary: Vocabulary | null, recommendWord: WordMeaning[] | undefined }) => {

  const recommends = useMemo(() => recommendWord && recommendWord.filter((value) => value.hiragana === text || value.tu === text), [, text])

  return (
    <>
      {
        googleWord != null || vocabulary != null ? <div className="flex flex-col">
          {

            recommends && recommends.length > 0 ?
              <div className="flex gap-1 overflow-x-scroll mb-2">
                {
                  (recommends.map((word) =>
                    <RecommendWord key={word.id} word={word} classButton="border border-blue-300 px-1 pt-3 pb-6 rounded-sm" />
                  ))
                }
              </div>
              : null
          }

          {googleWord && <div className="border border-blue-300 px-1 pt-3 pb-6 rounded-sm w-full flex flex-col">
            <div >{text}</div>
            <div>{googleWord}</div>
          </div>}
          {
            vocabulary != null ? (
              <>
                <span className="cursor-pointer text-danger text-2xl">{vocabulary.tu}</span >
                <div className="flex items-center ">
                  <div className="flex flex-col items-center mr-2">
                    <span className="text-sm">{vocabulary.romanji}</span>
                    <span className="text-linkSecondary text-xl">{vocabulary.hiragana}</span>
                  </div>
                  <AudioPlayer src={vocabulary.pronounce} icon={
                    <path data-v-61d984ab="" fill="currentColor" d="M412.6 182c-10.28-8.334-25.41-6.867-33.75 3.402c-8.406 10.24-6.906 25.35 3.375 33.74C393.5 228.4 400 241.8 400 255.1c0 14.17-6.5 27.59-17.81 36.83c-10.28 8.396-11.78 23.5-3.375 33.74c4.719 5.806 11.62 8.802 18.56 8.802c5.344 0 10.75-1.779 15.19-5.399C435.1 311.5 448 284.6 448 255.1S435.1 200.4 412.6 182zM473.1 108.2c-10.22-8.334-25.34-6.898-33.78 3.34c-8.406 10.24-6.906 25.35 3.344 33.74C476.6 172.1 496 213.3 496 255.1s-19.44 82.1-53.31 110.7c-10.25 8.396-11.75 23.5-3.344 33.74c4.75 5.775 11.62 8.771 18.56 8.771c5.375 0 10.75-1.779 15.22-5.431C518.2 366.9 544 313 544 255.1S518.2 145 473.1 108.2zM534.4 33.4c-10.22-8.334-25.34-6.867-33.78 3.34c-8.406 10.24-6.906 25.35 3.344 33.74C559.9 116.3 592 183.9 592 255.1s-32.09 139.7-88.06 185.5c-10.25 8.396-11.75 23.5-3.344 33.74C505.3 481 512.2 484 519.2 484c5.375 0 10.75-1.779 15.22-5.431C601.5 423.6 640 342.5 640 255.1S601.5 88.34 534.4 33.4zM301.2 34.98c-11.5-5.181-25.01-3.076-34.43 5.29L131.8 160.1H48c-26.51 0-48 21.48-48 47.96v95.92c0 26.48 21.49 47.96 48 47.96h83.84l134.9 119.8C272.7 477 280.3 479.8 288 479.8c4.438 0 8.959-.9314 13.16-2.835C312.7 471.8 320 460.4 320 447.9V64.12C320 51.55 312.7 40.13 301.2 34.98z" ></path>
                  } />
                </div>
                {vocabulary.detailWords && vocabulary.detailWords.map((def, i) => <ItemDefination key={i} index={i + 1} defination={def} />)}
                <FixedTranslation kanji={vocabulary.tu} hiragana={vocabulary.hiragana} meaningsVocab={[]} />
                <div className="flex">
                  <ButtonToOtherWebsite icon={<svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="green"
                    stroke="green"
                    viewBox="0 0 24 24">
                    <path
                      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>} link={`https://ysearch.jpdictionary.com/youtube.html?q=${text}`} title="Tìm kiếm video" /></div>
              </>
            ) : null
          }
        </div> : (<div className="flex flex-col">
          <div className="text-lg font-medium">Gợi ý</div>
          <div>Hãy chờ tải recommend word</div>
          <div>Có thể tập nghe thông qua youlish ở biểu tượng youtube</div>
        </div>)

      }
    </>
  )
};

export default VocabularyTab;
