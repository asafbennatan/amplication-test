import { ChatListRelationFilter } from "../chat/ChatListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  chat?: ChatListRelationFilter;
  content?: StringNullableFilter;
  fromUser?: UserWhereUniqueInput;
  id?: StringFilter;
  readAt?: DateTimeNullableFilter;
  toUser?: UserWhereUniqueInput;
};
