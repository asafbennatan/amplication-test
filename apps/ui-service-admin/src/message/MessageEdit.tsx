import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ChatTitle } from "../chat/ChatTitle";
import { UserTitle } from "../user/UserTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
