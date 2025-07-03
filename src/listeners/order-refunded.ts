import { OrderRefundedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.ORDER_REFUNDED;

export default (payload: OrderRefundedPayload): void => {
  console.log('ORDER REFUNDED Event:', payload);

  // Add your custom tracking logic here
};
