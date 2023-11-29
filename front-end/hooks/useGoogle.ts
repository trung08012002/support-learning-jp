import { useQuery } from "@tanstack/react-query";
import { translateWordByGoogle } from "api/words.api";
import React from "react";
interface Props {
  word: string;
}

export default function useGoogleTranSlate(props: Props) {
  const { word } = props;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["google_translate", word],
    queryFn: () =>
      translateWordByGoogle(word).then(
        (data) => data.data.data.translations[0].translatedText
      ),
    enabled: false,
  });
  return { data, isLoading, refetch };
}
