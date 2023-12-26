import { useQuery } from "@tanstack/react-query";
import { getHiragana } from "api/hiragana.api";

export default function useHiragana() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["hiragana"],
    queryFn: getHiragana,
    enabled: false,
    staleTime: Infinity,
  });
  return { data, isLoading, refetch };
}
