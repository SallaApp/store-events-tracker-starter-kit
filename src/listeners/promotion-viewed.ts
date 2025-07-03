import { PromotionViewedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.PROMOTION_VIEWED;

export default (payload: PromotionViewedPayload): void => {
  console.log('PROMOTION VIEWED Event:', payload);

  // Add your custom tracking logic here
};
