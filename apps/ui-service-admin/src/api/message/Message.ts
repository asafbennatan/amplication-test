import { Chat } from "../chat/Chat";
import { User } from "../user/User";

export type Message = {
  chat?: Array<Chat>;
  content: string | null;
  createdAt: Date;
  fromUser?: User | null;
  id: string;
  readAt: Date | null;
  toUser?: User | null;
  updatedAt: Date;
};
