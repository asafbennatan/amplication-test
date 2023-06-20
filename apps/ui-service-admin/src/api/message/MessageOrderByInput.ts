import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  fromUserId?: SortOrder;
  id?: SortOrder;
  readAt?: SortOrder;
  toUserId?: SortOrder;
  updatedAt?: SortOrder;
};
