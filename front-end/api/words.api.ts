import useAxiosAuth from "hooks/useAxiosAuth";
import { GoogleWord, Vocabulary, WordMeaning } from "types/word";
import http from "utils/http";

export const getWords = (word: string) =>
  http.get<Vocabulary[]>("words/search", {
    params: {
      word: word,
    },
  });

export const getWordMeanings = (word: string) => {
  return http.get<WordMeaning[]>(`words/${word}`);
};

export const getWord = (word: string) => {
  return http.get<Vocabulary>("words/searchWord", {
    params: {
      word: word,
    },
  });
};

export const getFirstWordOfSentence = (word: string) => {
  return http.get<Vocabulary>("words/getFirstWordOfSentence", {
    params: {
      word: word,
    },
  });
};

export const translateWordByGoogle = (word: string) =>
  http.get<GoogleWord>("words/google-translate", {
    params: {
      word: word,
    },
  });

export const useWordApi = () => {
  const http = useAxiosAuth();
  function createWord(word: Vocabulary) {
    return http.post<Vocabulary>("words", word);
  }
  return { createWord };
};
