import { useQuery } from "@tanstack/react-query";
import { getWord } from "api/words.api";

export default function useVocabulary(kanji: string, hiragana: string) {
  const { data, refetch } = useQuery({
    queryKey: ["wordMeaning", hiragana, kanji],
    queryFn: () => getWord(kanji + "&" + hiragana),
    enabled: false,
    throwOnError: (error, query) => {
      console.log(error);
      return true;
    },
  });
  return { data, refetch };
}
