"use client"
import { nanoid } from "nanoid";
import { ReactNode, createContext, useState } from "react";
import { Message } from "types/message";
export const MessageContext = createContext<{
  messages: Message[];
  isMessageUpdating: boolean;
  addMessage: (message: Message) => void;
  removeMessage: (id: string) => void;
  updateMessage: (id: string, updateFn: (prevText: string) => string) => void;
  setIsMessageUpdating: (isUpdating: boolean) => void;
}>({
  messages: [],
  isMessageUpdating: false,
  addMessage: () => { },
  removeMessage: () => { },
  updateMessage: () => { },
  setIsMessageUpdating: () => { },
});

export function MessagesProvider({ children }: { children: ReactNode }) {
  const [isMessageUpdating, setIsMessageUpdating] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: nanoid(),
      text: 'Hello, how can I help you?',
      isUserMessage: false
    }
  ]);
  const addMessage = (message: Message) => {
    setMessages((prev) => [message])
  }
  const removeMessage = (id: string) => {
    setMessages((prev) => prev.filter((message) => message.id != id))
  }
  const updateMessage = (id: string, updateFn: (prevText: string) => string) => {
    setMessages((prev) => prev.map((message) => {
      if (message.id === id) {
        return { ...message, text: updateFn(message.text) }
      }
      return message
    }))
  }
  return <MessageContext.Provider value={{
    messages, addMessage, removeMessage
    , updateMessage, setIsMessageUpdating, isMessageUpdating
  }}>
    {children}
  </MessageContext.Provider>
}
