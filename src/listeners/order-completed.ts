import { OrderCompletedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.ORDER_COMPLETED;

export default (payload: OrderCompletedPayload): void => {
  console.log('ORDER COMPLETED Event:', payload);

  // Add your custom tracking logic here
};
