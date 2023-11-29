import { Kanji } from "types/kanji";
import http from "utils/http";

export const getKanjis = (kanji: string) =>
  http.get<Kanji[]>("kanjis", {
    params: {
      word: kanji,
    },
  });
