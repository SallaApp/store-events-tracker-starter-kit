import { CouponAppliedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.COUPON_APPLIED;

export default (payload: CouponAppliedPayload): void => {
  console.log('COUPON APPLIED Event:', payload);

  // Add your custom tracking logic here
};
