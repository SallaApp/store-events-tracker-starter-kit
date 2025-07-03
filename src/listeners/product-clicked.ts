import { ProductClickedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.PRODUCT_CLICKED;

export default (payload: ProductClickedPayload): void => {
  console.log('PRODUCT CLICKED Event:', payload);

  // Add your custom tracking logic here
};
