import { CartUpdatedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.CART_UPDATED;

export default (payload: CartUpdatedPayload): void => {
  console.log('CART UPDATED Event:', payload);

  // Add your custom tracking logic here
};


