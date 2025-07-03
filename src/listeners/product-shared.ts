import { ProductSharedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.PRODUCT_SHARED;

export default (payload: ProductSharedPayload): void => {
  console.log('PRODUCT SHARED Event:', payload);

  // Add your custom tracking logic here
};
