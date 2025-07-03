import { CouponRemovedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.COUPON_REMOVED;

export default (payload: CouponRemovedPayload): void => {
  console.log('COUPON REMOVED Event:', payload);

  // Add your custom tracking logic here
};
