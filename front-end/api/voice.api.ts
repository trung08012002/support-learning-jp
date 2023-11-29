import httpAi from "utils/httpAi";

export const getSentenceFromVoice = (formData: FormData) => {
  return httpAi.post<string>("audio-to-text", {
    formData: formData,
  });
};
