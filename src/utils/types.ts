import React from "react";

export interface IUser {
  auth_id: string;
  username: string;
  email: string;
  created_at: Date;
  blocked_users: IUser[] | string[];
  _id: string;
}
export interface IMessage {
  sender_id: string;
  body: string;
  timestamp: Date;
  sender_blocked: boolean;
  recipient_blocked: boolean;
}

export interface IConversation {
  messages: IMessage[] | Array<string>;
  members: IUser[] | Array<string>;
}

export type ReqMessage = {
  sender_id: string;
  recipient_id: string;
  body: string;
};

export type IUserContext = [
  value: IUser | null,
  setValue: React.Dispatch<React.SetStateAction<IUser | null>>
];
