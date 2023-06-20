import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ChatTitle } from "../chat/ChatTitle";
import { UserTitle } from "../user/UserTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="chat"
          reference="Chat"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChatTitle} />
        </ReferenceArrayInput>
        <TextInput label="content" source="content" />
        <ReferenceInput source="fromUser.id" reference="User" label="From User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="Read At" source="readAt" />
        <ReferenceInput source="toUser.id" reference="User" label="To User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
