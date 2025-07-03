import { PromotionClickedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.PROMOTION_CLICKED;

export default (payload: PromotionClickedPayload): void => {
  console.log('PROMOTION CLICKED Event:', payload);

  // Add your custom tracking logic here
};
