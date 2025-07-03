import { CheckoutStepViewedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.CHECKOUT_STEP_VIEWED;

export default (payload: CheckoutStepViewedPayload): void => {
  console.log('CHECKOUT STEP VIEWED Event:', payload);

  // Add your custom tracking logic here
};
