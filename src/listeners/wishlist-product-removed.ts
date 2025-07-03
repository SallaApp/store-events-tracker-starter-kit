import { WishlistProductRemovedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.WISHLIST_PRODUCT_REMOVED;

export default (payload: WishlistProductRemovedPayload): void => {
  console.log('WISHLIST PRODUCT REMOVED Event:', payload);

  // Add your custom tracking logic here
};
