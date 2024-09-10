import { CreateChargeDto } from '@app/common/dto/create-charge.dto';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
  private stripe: Stripe;

  constructor(private readonly configService: ConfigService) {
    this.stripe = new Stripe(
      this.configService.get<string>('STRIPE_SECRET_KEY'),
      {
        apiVersion: '2024-06-20',
      },
    );
  }

  async createCharge(createChargeDto: CreateChargeDto) {
    try {
      const { card, amount } = createChargeDto;

      const paymentMethod = await this.stripe.paymentMethods.create({
        type: 'card',
        card,
      });

      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: amount * 100,
        currency: 'usd',
        payment_method: paymentMethod.id,
        confirm: true,
        payment_method_types: ['card'],
      });

      return paymentIntent;
    } catch (error) {
      console.error(`Error creating charge: ${error.message}`);
      throw new Error(`Error creating charge: ${error.message}`);
    }
  }
}
