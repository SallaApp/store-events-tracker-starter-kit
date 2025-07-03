import { CheckoutStartedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.CHECKOUT_STARTED;

export default (payload: CheckoutStartedPayload): void => {
  console.log('CHECKOUT STARTED Event:', payload);

  // Add your custom tracking logic here
};
