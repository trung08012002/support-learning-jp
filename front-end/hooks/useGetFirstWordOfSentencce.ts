import { useQuery } from "@tanstack/react-query";
import { getFirstWordOfSentence } from "api/words.api";

export default function useGetFirstWordOfSentence({ word }: { word: string }) {
  const { data, refetch } = useQuery({
    queryKey: ["firstWordOfSentence", word],
    queryFn: () => getFirstWordOfSentence(word),
    enabled: false,
  });
  return { data, refetch };
}
