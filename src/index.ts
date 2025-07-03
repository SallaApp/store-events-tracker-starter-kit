import { EcommerceEventPayload } from '@salla.sa/ecommerce-events-base';
import { listeners } from './auto-listeners-registry';

if (typeof window === 'undefined' || !window.Salla) {
  console.error('Salla is not available. Make sure Salla Twilight SDK is loaded.');
}

window.Salla.onReady(() => {
  window.Salla.analytics.registerTracker({
        name: "StoreEventsTracker",
        track: (eventName: string, payload: EcommerceEventPayload) => {
          const listener = listeners.get(eventName);

          if (!listener) {
            return;
          }

          // Handle the event
          try {
            listener(payload);
          } catch (error) {
            console.error(`Error handling event ${eventName}:`, error);
          }
        },
        page: (payload: any) => {
          console.log('Page Event:', payload);
          // Implement page tracking logic here
          // Example: Track page views, user navigation, etc.
        }
      });
});