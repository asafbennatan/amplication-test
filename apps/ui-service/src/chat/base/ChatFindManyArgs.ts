/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChatWhereInput } from "./ChatWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ChatOrderByInput } from "./ChatOrderByInput";

@ArgsType()
class ChatFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ChatWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ChatWhereInput, { nullable: true })
  @Type(() => ChatWhereInput)
  where?: ChatWhereInput;

  @ApiProperty({
    required: false,
    type: [ChatOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ChatOrderByInput], { nullable: true })
  @Type(() => ChatOrderByInput)
  orderBy?: Array<ChatOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ChatFindManyArgs as ChatFindManyArgs };
