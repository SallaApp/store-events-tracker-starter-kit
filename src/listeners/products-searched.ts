import { ProductsSearchedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.PRODUCTS_SEARCHED;

export default (payload: ProductsSearchedPayload): void => {
  console.log('PRODUCTS SEARCHED Event:', payload);

  // Add your custom tracking logic here
};
