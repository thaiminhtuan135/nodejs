import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  RawBodyRequest,
  Req,
  Headers,
} from '@nestjs/common';
import Stripe from 'stripe';
@Controller('stripe')
export class StripeController {
  private stripe: Stripe;
  // webhook secret whsec_afa882567ac0e3dc31282a2fe07b4b432ef6e2807e02e41510b7d0ceb9f98176
  constructor() {
    this.stripe = new Stripe(
      'sk_test_51MCxVEJ9DfixT1i3Gb7I7zAokglfyDCfxvJSWRBFfKxNWevF34va8zumg0fviu4lBOsVvFxAsDsEdDTlpw7QAzf0008bxFOQ1j',
      {
        apiVersion: '2023-10-16',
      },
    );
  }
  //customer id : cus_PVKyJxnj74LL55

  @Post('create/customer')
  createCustomer() {
    return this.stripe.customers.create({
      name: 'Macus Thai',
      email: 'jennyDang@gmail.com',
    });
  }
  @Get(':idCustomer')
  findCustomerById(@Param('idCustomer') id: string) {
    return this.stripe.customers.retrieve(id);
  }
  @Get()
  find() {
    return this.stripe.customers.list({
      limit: 10,
    });
  }
  @Put()
  updateCustomer() {
    return this.stripe.customers.update('cus_PVKyJxnj74LL55', {
      description: 'no one before',
      phone: '0213456',
    });
  }

  @Post('/intent')
  async createStripeIntent() {
    const paymentIntent = await this.stripe.paymentIntents.create({
      currency: 'usd',
      amount: 2000,
      customer: 'cus_PVKyJxnj74LL55',
      metadata: {
        type: 'TOP_UP',
        amount: 2000,
        userId: 'cus_PVKyJxnj74LL55',
      },
      // automatic_payment_methods: {
      //   enabled: true,
      // },
      confirmation_method: 'manual',
    });
    return { clientSecret: paymentIntent.client_secret };
  }
  @Post('/confirm')
  async confirmPaymentIntent() {
    const paymentIntent = await this.stripe.paymentIntents.confirm(
      'pi_3OgT6uJ9DfixT1i31ts8kNOc',
      {
        payment_method: 'pm_card_visa',
        return_url: 'https://www.google.com',
      },
    );
    console.log(paymentIntent);
  }
  //confirm
  @Post('/webhook')
  async webhook(@Req() req: RawBodyRequest<Request>, @Headers() headers) {
    const secret =
      'whsec_afa882567ac0e3dc31282a2fe07b4b432ef6e2807e02e41510b7d0ceb9f98176';
    const payload: any = JSON.stringify(req.body, null, 2);
    // const payload: any = req.body;
    const sig: string = headers['stripe-signature'];
    // console.log(payload);
    // console.log(sig);
    // const event = await this.stripe.webhooks.constructEvent(
    //   payload,
    //   sig,
    //   secret,
    // );
    const header = this.stripe.webhooks.generateTestHeaderString({
      payload: payload,
      secret,
    });

    const event = await this.stripe.webhooks.constructEvent(
      payload,
      header,
      secret,
    );

    switch (event.type) {
      case 'payment_intent.succeeded':
        console.log(event.type);
      case 'payment_intent.payment_failed':
      case 'payment_intent.processing':
      case 'payment_intent.canceled':
      case 'payment_intent.requires_action':
    }

    console.log(event.type);
    console.log(event);
    // const event =await this.stripe.webhooks.constructEvent()
    return 'chuan bai';
  }
}
