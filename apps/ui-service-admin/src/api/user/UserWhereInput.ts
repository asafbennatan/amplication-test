import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  incomingMessage?: MessageListRelationFilter;
  lastName?: StringNullableFilter;
  outgoingMessages?: MessageListRelationFilter;
  username?: StringFilter;
};
