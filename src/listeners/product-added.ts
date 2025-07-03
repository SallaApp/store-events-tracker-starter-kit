import { ProductAddedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.PRODUCT_ADDED;

export default (payload: ProductAddedPayload): void => {
  console.log('PRODUCT ADDED Event:', payload);

  // Add your custom tracking logic here
};
