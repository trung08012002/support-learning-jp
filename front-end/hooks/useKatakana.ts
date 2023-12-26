import { useQuery } from "@tanstack/react-query";
import getKatakana from "api/katakana.api";

export default function useKatakana() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["katakana"],
    queryFn: getKatakana,
    enabled: false,
    staleTime: Infinity,
  });
  return { data, isLoading, refetch };
}
