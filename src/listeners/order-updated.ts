import { OrderUpdatedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.ORDER_UPDATED;

export default (payload: OrderUpdatedPayload): void => {
  console.log('Order Updated Event:', payload);

  // Add your custom tracking logic here
};