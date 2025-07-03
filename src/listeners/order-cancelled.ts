import { OrderCancelledPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.ORDER_CANCELLED;

export default (payload: OrderCancelledPayload): void => {
  console.log('ORDER CANCELLED Event:', payload);

  // Add your custom tracking logic here
};
