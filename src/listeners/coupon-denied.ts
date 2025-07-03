import { CouponDeniedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.COUPON_DENIED;

export default (payload: CouponDeniedPayload): void => {
  console.log('COUPON DENIED Event:', payload);

  // Add your custom tracking logic here
};
