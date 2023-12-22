import httpAi from "utils/httpAi";

export const getSentenceFromVoice = (formData: FormData) => {
  return httpAi.post<string>(
    "audio-to-text",
    {
      data: formData,
    },
    {
      maxBodyLength: Infinity,
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=<calculated when request is sent>",
      },
    }
  );
};
