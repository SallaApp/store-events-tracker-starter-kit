import { ProductListFilteredPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.PRODUCT_LIST_FILTERED;

export default (payload: ProductListFilteredPayload): void => {
  console.log('PRODUCT LIST FILTERED Event:', payload);

  // Add your custom tracking logic here
};


