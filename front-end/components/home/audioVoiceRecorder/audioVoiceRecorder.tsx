import { getSentenceFromVoice } from "api/voice.api";
import useVoice from "hooks/useVoice";
import React, { useState, useRef } from "react";

const mimeType: string = "audio/webm";

const AudioRecorder: React.FC = () => {
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

                const audioBlob: Blob = new Blob(audioChunk.current, { type: mimeType });
                const fileOfBlob = new File([audioBlob], 'audio_file')
                const formData = new FormData();

                formData.append("audio_file", fileOfBlob);


                getSentenceFromVoice(formData).then((sentence) => {

                })
                audioChunk.current = [];
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