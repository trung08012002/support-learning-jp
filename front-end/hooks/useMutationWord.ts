import { useMutation } from "@tanstack/react-query";
import { useWordApi } from "api/words.api";
import { Vocabulary } from "types/word";

export default function useMutationWord() {
  const api = useWordApi();
  const wordMutation = useMutation({
    mutationFn: api.createWord,
  });
  return wordMutation;
}
