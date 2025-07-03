import { WishlistProductAddedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.WISHLIST_PRODUCT_ADDED;

export default (payload: WishlistProductAddedPayload): void => {
  console.log('WISHLIST PRODUCT ADDED Event:', payload);

  // Add your custom tracking logic here
};
