import { ProductRemovedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.PRODUCT_REMOVED;

export default (payload: ProductRemovedPayload): void => {
  console.log('PRODUCT REMOVED Event:', payload);

  // Add your custom tracking logic here
};
