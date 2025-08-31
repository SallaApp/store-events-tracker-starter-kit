import { SignedOutPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.SIGNED_OUT;

export default (_payload: SignedOutPayload): void => {
  console.log('SIGNED OUT Event');

  // Add your custom tracking logic here
};


