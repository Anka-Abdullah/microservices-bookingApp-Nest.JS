import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class ReservationDocument extends AbstractDocument {
  @Prop({ required: false, type: Date })
  startDate: Date;

  @Prop({ required: false, type: Date })
  endDate: Date;

  // @Prop({ required: false, type: MongooseSchema.Types.ObjectId, ref: 'User' })
  @Prop()
  userId: string;

  // @Prop({ required: false, type: MongooseSchema.Types.ObjectId, ref: 'Place' })
  @Prop()
  placeId: string;

  @Prop({ required: false, type: String })
  invoiceId: string;
}

export const ReservationSchema =
  SchemaFactory.createForClass(ReservationDocument);
ReservationSchema.index({ startDate: 1, endDate: 1, userId: 1, placeId: 1 });
