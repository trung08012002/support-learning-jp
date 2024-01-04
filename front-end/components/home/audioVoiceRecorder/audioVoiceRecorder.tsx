import { getSentenceFromVoice } from "api/voice.api";
import React, { useState, useRef } from "react";

interface Props {
    setTextSearch: (value: string) => void
}

const AudioRecorder = ({ setTextSearch }: Props) => {
    const [permission, setPermission] = useState<boolean>(false);
    const mediaRecorder = useRef<MediaRecorder | null>(null);
    const [recordingStatus, setRecordingStatus] = useState<string>("inactive");
    const [stream, setStream] = useState<MediaStream | null>(null);

    const audioChunk = useRef<Blob[]>([]);

    const getMicrophonePermission = async (): Promise<void> => {
        if ("MediaRecorder" in window) {
            try {
                const mediaStream: MediaStream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                setPermission(true);
                setStream(mediaStream);
            } catch (err: any) {
                alert(err.message);
            }
        } else {
            alert("The MediaRecorder API is not supported in your browser.");
        }
    };

    const startRecording = async (): Promise<void> => {
        setRecordingStatus("recording");

        if (stream) {
            const media: MediaRecorder = new MediaRecorder(stream);
            mediaRecorder.current = media;


            mediaRecorder.current.ondataavailable = (event) => {

                if (typeof event.data === "undefined") return;
                if (event.data.size === 0) return;

                audioChunk.current.push(event.data);

            };
            mediaRecorder.current.start();




        }
    };

    const stopRecording = (): void => {
        setRecordingStatus("inactive");

        if (mediaRecorder.current) {
            mediaRecorder.current.stop();

            mediaRecorder.current.onstop = () => {
                let file = new File(audioChunk.current, "1.wav", {
                    type: "audio/x-wav", lastModified: new Date().getTime()
                });
                const axios = require('axios');
                const FormData = require('form-data');
                let data = new FormData();
                data.append('audio', file);
                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'https://ed98-34-42-45-124.ngrok-free.app/audio-to-text',
                    headers: {
                        'Content-Type': "multipart/form-data; boundary=<calculated when request is sent>"
                    },
                    data: data
                };
                axios.request(config)
                    .then((response: { data: { text: string; } | null; }) => {
                        console.log(response)
                        if (response.data != null) {
                            const data = response.data as { text: string }
                            setTextSearch((data.text))
                        }
                    })
                    .catch((error: any) => {
                        console.log(error);
                    });
                audioChunk.current = []
                // let file = new File(audioChunk.current, "1.wav", {
                //     type: "audio/x-wav", lastModified: new Date().getTime()
                // });

                // const FormData = require('form-data');
                // let data = new FormData();
                // data.append('audio', file);
                // getSentenceFromVoice(data).then((res) => {
                //     if (res.data != null) {
                //         setTextSearch(res.data)
                //     }
                // })
                // audioChunk.current = []
            };
        }
    };

    return (
        <div className="w-full h-full flex justify-center items-center">



            {!permission ? (
                <button onClick={getMicrophonePermission} type="button">
                    Get Microphone
                </button>
            ) : null}
            {permission && recordingStatus === "inactive" ? (
                <button onClick={startRecording} type="button">
                    <img src="https://tudienjp.com/assets/images/mic.gif" className="h-full w-full object-contain" />
                </button>
            ) : null}
            {recordingStatus === "recording" ? (
                <button onClick={stopRecording} type="button">
                    <img src="https://tudienjp.com/assets/images/mic-animate.gif" className="h-full w-full object-contain" />
                </button>
            ) : null}



        </div>
    );
};

export default AudioRecorder;