import React, { useState } from "react";
import { MessagesBody, UsersNav } from "../components";
import { IUser, useActiveUser, useSocket } from "../utils";

export const MessagingPage: React.FC = () => {
  const socket = useSocket();
  const user = useActiveUser()[0];
  const [currentRecipient, setCurrentRecipient] = useState<IUser | null>(null);

  const setRecipient = (recipient: IUser) => {
    setCurrentRecipient(recipient);
    socket.emit("getMessages", [user?._id, recipient?._id]);
    console.log([user?._id, recipient?._id]);
  };

  return (
    <div className="flex w-full h-screen bg-gray">
      <UsersNav setRecipient={setRecipient} />
      <MessagesBody currentRecipient={currentRecipient} currentUser={user} />
    </div>
  );
};
