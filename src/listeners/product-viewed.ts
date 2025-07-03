import { ProductViewedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.PRODUCT_VIEWED;

export default (payload: ProductViewedPayload): void => {
  console.log('PRODUCT VIEWED Event:', payload);

  // Add your custom tracking logic here
};
