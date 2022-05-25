import React from "react";
import { MessagesBody, UsersNav } from "../components";

export const MessagingPage: React.FC = () => {
  return (
    <div className="flex w-full h-screen bg-gray">
      <UsersNav />
      <MessagesBody />
    </div>
  );
};
