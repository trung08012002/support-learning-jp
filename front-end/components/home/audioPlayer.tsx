"use client"
import React, { ReactNode, useEffect, useRef, useState } from "react"
import { preload } from "react-dom";

type AudioPlayerProps = {
  src: string,
  icon: ReactNode,
}

const AudioPlayer = ({ src, icon }: AudioPlayerProps) => {

  const timeRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playVideo = () => {
    if (audioRef.current) {
      console.log(src)
      const timeNow = Date.now();

      const duration = audioRef.current?.duration || 0;

      if (timeNow - timeRef.current.valueOf() - duration * 1000 - 500 > 0) {
        audioRef.current.play();
        timeRef.current = timeNow;
      }
    }
  }

  return (
    <div>
      <audio src={src} ref={audioRef}></audio>
      <button onClick={playVideo}>
        <svg data-v-61d984ab="" aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400"
          focusable="false" data-prefix="fas" data-icon="volume-high"
          role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">{icon}</svg>
      </button>

    </div>
  )
};

export default AudioPlayer;
