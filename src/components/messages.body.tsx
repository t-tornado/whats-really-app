import { useAuth0 } from "@auth0/auth0-react";
import React, { useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { Message } from "./message";
import { UserCard } from "./user.card";

export const MessagesBody: React.FC = () => {
  const { user } = useAuth0();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const onChangeMessageInput = (e: any) => {
    setMessage(e.target.value);
  };
  const updateMessages = () => {
    setMessages((p) => [...p, message.trim()]);
    setMessage("");
  };

  const renderMessages = () => {
    return messages.map((message, idx) => (
      <Message {...{ message, self: true, key: idx }} />
    ));
  };

  return (
    <div className="w-[75%] h-full px-10">
      <div className="w-full h-[10%] flex items-center justify-start">
        <UserCard user={user?.nickname || ""} />
      </div>
      <div className="w-full h-[70%] flex flex-col space-y-4 px-6 overflow-hidden overflow-y-scroll">
        <div className="w-[95%] mx-auto h-full space-y-6">
          {renderMessages()}
        </div>
      </div>
      <div className="w-full h-[20%] pt-4 flex">
        <div className="w-[80%] h-full flex items-center space-x-14">
          <textarea
            className="p-3 rounded-lg w-[75%] flex h-12 flex-col text-sm"
            draggable={false}
            value={message}
            onChange={onChangeMessageInput}
            ref={textAreaRef}
          />
          <button
            onClick={updateMessages}
            className="h-14 w-14 flex justify-center items-center bg-default rounded-full"
          >
            <FiSend size="24px" color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
};
