import { SignedUpPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.SIGNED_UP;

export default (payload: SignedUpPayload): void => {
  console.log('SIGNED UP Event:', payload);

  // Add your custom tracking logic here
};


