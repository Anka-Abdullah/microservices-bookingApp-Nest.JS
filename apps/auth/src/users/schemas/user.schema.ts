import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaTypes } from 'mongoose';

enum Gender {
  Male = 'male',
  Female = 'female',
}

@Schema({ versionKey: false, timestamps: true })
export class UserDocument extends AbstractDocument {
  @Prop({ type: SchemaTypes.String, required: true, unique: true, index: true })
  email: string;

  @Prop({ type: SchemaTypes.String, required: true })
  password: string;

  @Prop({ type: SchemaTypes.String, default: '' })
  about: string;

  @Prop({ type: [SchemaTypes.String], default: [] })
  interest: string[];

  @Prop({ type: SchemaTypes.String, required: true })
  first_name: string;

  @Prop({ type: SchemaTypes.String, required: true })
  last_name: string;

  @Prop({ type: SchemaTypes.String, enum: Gender, required: true })
  gender: Gender;

  @Prop({ type: SchemaTypes.Date, required: true })
  birthday: Date;

  @Prop({ type: SchemaTypes.String, default: '' })
  horoscope: string;

  @Prop({ type: SchemaTypes.String, default: '' })
  zodiac: string;

  @Prop({ type: SchemaTypes.Number, default: 0 })
  height: number;

  @Prop({ type: SchemaTypes.Number, default: 0 })
  weight: number;

  @Prop({ type: SchemaTypes.Boolean, default: true })
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
UserSchema.index({ email: 1 });
