import { ProductReviewedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.PRODUCT_REVIEWED;

export default (payload: ProductReviewedPayload): void => {
  console.log('Product Reviewed Event:', payload);

  // Add your custom tracking logic here
};