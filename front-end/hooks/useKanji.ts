import { useQuery } from "@tanstack/react-query";
import { getKanjis } from "api/kanji.api";
import { Kanji } from "types/kanji";

interface Props {
  kanji: string;
}
function useKanji(props: Props) {
  const { kanji } = props;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["kanjis", kanji],
    queryFn: () => getKanjis(kanji).then((response) => response.data),
    enabled: false,
  });
  return { data, isLoading, refetch };
}
export default useKanji;
