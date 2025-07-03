import { PaymentInfoEnteredPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.PAYMENT_INFO_ENTERED;

export default (payload: PaymentInfoEnteredPayload): void => {
  console.log('PAYMENT INFO ENTERED Event:', payload);

  // Add your custom tracking logic here
};
