import { UserProfileUpdatedPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.USER_PROFILE_UPDATED;

export default (payload: UserProfileUpdatedPayload): void => {
  console.log('USER PROFILE UPDATED Event:', payload);

  // Add your custom tracking logic here
};


