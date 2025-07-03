import { CheckoutStepCompletedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.CHECKOUT_STEP_COMPLETED;

export default (payload: CheckoutStepCompletedPayload): void => {
  console.log('CHECKOUT STEP COMPLETED Event:', payload);

  // Add your custom tracking logic here
};
