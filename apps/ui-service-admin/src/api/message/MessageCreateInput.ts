import { ChatCreateNestedManyWithoutMessagesInput } from "./ChatCreateNestedManyWithoutMessagesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  chat?: ChatCreateNestedManyWithoutMessagesInput;
  content?: string | null;
  fromUser?: UserWhereUniqueInput | null;
  readAt?: Date | null;
  toUser?: UserWhereUniqueInput | null;
};
