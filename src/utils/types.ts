export interface IUser {
  auth_id: string;
  username: string;
  email: string;
  created_at: Date;
  blocked_users: IUser[] | string[];
}
export interface IMessage {
  sender_id: string;
  body: string;
  timestamp: Date;
  blocked: boolean;
}

export interface IConversation {
  messages: IMessage[] | Array<string>;
  members: IUser[] | Array<string>;
}
