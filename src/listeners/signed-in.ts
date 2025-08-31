import { SignedInPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.SIGNED_IN;

export default (payload: SignedInPayload): void => {
  console.log('SIGNED IN Event:', payload);

  // Add your custom tracking logic here
};


