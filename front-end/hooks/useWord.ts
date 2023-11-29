import { useQuery } from "@tanstack/react-query";
import { getWordMeanings, getWords } from "api/words.api";
import http from "utils/http";

interface Props {
  word: string;
}

export default function useWord(props: Props) {
  const { word } = props;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["words", word],
    queryFn: () =>
      getWordMeanings(word).then((data) => {
        return data.data;
      }),
    enabled: false,
  });
  return { data, isLoading, refetch };
}
