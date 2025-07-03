import { CartViewedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.CART_VIEWED;

export default (payload: CartViewedPayload): void => {
  console.log('CART VIEWED Event:', payload);

  // Add your custom tracking logic here
};
