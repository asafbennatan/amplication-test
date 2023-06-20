import { ChatUpdateManyWithoutMessagesInput } from "./ChatUpdateManyWithoutMessagesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageUpdateInput = {
  chat?: ChatUpdateManyWithoutMessagesInput;
  content?: string | null;
  fromUser?: UserWhereUniqueInput | null;
  readAt?: Date | null;
  toUser?: UserWhereUniqueInput | null;
};
