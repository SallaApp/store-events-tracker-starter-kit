import { ProductListViewedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.PRODUCT_LIST_VIEWED;

export default (payload: ProductListViewedPayload): void => {
  console.log('PRODUCT LIST VIEWED Event:', payload);

  // Add your custom tracking logic here
};
