import React, { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { IMessage, IUser, ReqMessage, useSocket } from "../utils";
import { ActiveRecipientCard } from "./active.recipient.card";
import { Message } from "./message";
import { UserCard } from "./user.card";

interface Props {
  currentUser: (IUser & { _id: string }) | null;
  currentRecipient: (IUser & { _id: string }) | null;
}

export const MessagesBody: React.FC<Props> = (props) => {
  const { currentRecipient, currentUser } = props;

  const socket = useSocket();
  const scrollIntoViewRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState("");
  const onChangeMessageInput = (e: any) => {
    setMessage(e.target.value);
  };
  const updateMessages = () => {
    if (message.trim()) {
      const recipient_id = currentRecipient!._id;
      const sender_id = currentUser!._id;
      const messageObject: ReqMessage = {
        recipient_id,
        sender_id,
        body: message.trim(),
      };
      socket.emit("sendMessage", messageObject);
      setMessage("");
    }
  };

  const renderMessages = () => {
    return messages.map((message, idx) => {
      if (
        (message.recipient_blocked && currentUser?._id !== message.sender_id) ||
        (message.sender_blocked && currentUser?._id !== message.sender_id)
      )
        return null;
      else
        return (
          <Message
            {...{
              message,
              self: message.sender_id === currentUser?._id,
              key: idx,
            }}
          />
        );
    });
  };

  useEffect(() => {
    setMessages([]);
  }, [currentRecipient]);

  useEffect(() => {
    socket.on("fetchMessages", (data) => {
      console.log("MESSAGE FETCHED");
      if (
        data.members.includes(currentUser?._id) &&
        data.members.includes(currentRecipient?._id)
      ) {
        setMessages(data.messages || []);
      } else console.warn("not your conversation");
    });
  }, [socket, currentRecipient]);

  useEffect(() => {
    scrollIntoViewRef.current?.scrollIntoView({
      block: "end",
      inline: "end",
    });
  }, [messages, scrollIntoViewRef]);

  console.log(messages);

  return (
    <div className="w-[75%] h-full px-10">
      <div className="w-full h-[8%] flex items-center justify-start mb-6">
        {currentRecipient ? (
          <ActiveRecipientCard user={currentRecipient} />
        ) : null}
      </div>
      <div className="w-full h-[70%] flex flex-col space-y-5 px-6 overflow-hidden overflow-y-scroll">
        <div
          className={`${
            currentRecipient
              ? "mx-auto  space-y-6"
              : "flex justify-center items-center"
          } w-[95%] h-full`}
        >
          {currentRecipient ? (
            <>{renderMessages()}</>
          ) : (
            <>
              <h2 className="text-2xl font-poppinsMedium text-defualt">
                Select a user to start Chatting
              </h2>
            </>
          )}
          <div ref={scrollIntoViewRef} />
        </div>
      </div>
      <div className="w-full h-[20%] pt-4 flex">
        <div className="w-[80%] h-full flex items-center space-x-14">
          <textarea
            className="p-3 rounded-lg w-[75%] flex h-12 flex-col text-sm bg-gray"
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
