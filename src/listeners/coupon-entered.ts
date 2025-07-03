import { CouponEnteredPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.COUPON_ENTERED;

export default (payload: CouponEnteredPayload): void => {
  console.log('COUPON ENTERED Event:', payload);

  // Add your custom tracking logic here
};
