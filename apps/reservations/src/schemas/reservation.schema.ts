import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class ReservationDocument extends AbstractDocument {
  @Prop({ required: true, type: Date })
  startDate: Date;

  @Prop({ required: true, type: Date })
  endDate: Date;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'User' })
  userId: string;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Place' })
  placeId: string;

  @Prop({ required: true, type: String })
  invoiceId: string;
}

export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);
ReservationSchema.index({ startDate: 1, endDate: 1, userId: 1, placeId: 1 });
