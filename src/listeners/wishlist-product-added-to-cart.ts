import { WishlistProductAddedToCartPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.WISHLIST_PRODUCT_ADDED_TO_CART;

export default (payload: WishlistProductAddedToCartPayload): void => {
  console.log('WISHLIST PRODUCT ADDED TO CART Event:', payload);

  // Add your custom tracking logic here
};


