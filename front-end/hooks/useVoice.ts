import { useQuery } from "@tanstack/react-query";
import { getSentenceFromVoice } from "api/voice.api";

interface Props {
  voice: Blob | null;
}

export default function useVoice(props: Props) {
  const { voice } = props;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["voice"],
    queryFn: () => {
      const formData = new FormData();
      formData.append("audio", voice!, "file.wav");
      return getSentenceFromVoice(formData);
    },
    enabled: !!voice,
  });
  return { data, isLoading, refetch };
}
