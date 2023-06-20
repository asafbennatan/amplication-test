import { Message } from "../message/Message";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  incomingMessage?: Array<Message>;
  lastName: string | null;
  outgoingMessages?: Array<Message>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
