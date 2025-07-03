# Store Events Tracker

A TypeScript-based ecommerce events tracker that integrates with Salla's analytics platform. This package provides a comprehensive set of event listeners for tracking various ecommerce activities based on Segment's ecommerce v2 specification.

## Overview

The Store Events Tracker automatically registers with Salla's analytics system and provides event handlers for all major ecommerce events. It uses a plugin-based architecture where individual event listeners are automatically discovered and registered.

## Features

- 🚀 **Automatic Registration**: Seamlessly integrates with Salla's analytics platform
- 📊 **Comprehensive Event Coverage**: Supports 25+ ecommerce events
- 🔧 **TypeScript Support**: Full type safety with TypeScript definitions
- 🎯 **Modular Architecture**: Individual event listeners for easy customization
- 🛡️ **Error Handling**: Built-in error handling for robust tracking
- 📦 **Auto-Discovery**: Automatic listener registration via build-time discovery

## Architecture

```
src/
├── index.ts                    # Main entry point and tracker registration
└── listeners/                  # Event listener implementations
    ├── product-viewed.ts       # Product viewing events
    ├── cart-viewed.ts         # Shopping cart events
    ├── order-completed.ts     # Order completion events
    └── ... (22+ more listeners)
```

## Supported Events

### Product Events
- [`product-viewed.ts`](listeners/product-viewed.ts) - Product page views
- [`product-clicked.ts`](listeners/product-clicked.ts) - Product link clicks
- [`product-added.ts`](listeners/product-added.ts) - Add to cart actions
- [`product-removed.ts`](listeners/product-removed.ts) - Remove from cart actions
- [`product-reviewed.ts`](listeners/product-reviewed.ts) - Product reviews
- [`product-shared.ts`](listeners/product-shared.ts) - Product sharing
- [`product-list-viewed.ts`](listeners/product-list-viewed.ts) - Category/list views
- [`products-searched.ts`](listeners/products-searched.ts) - Search queries

### Cart & Checkout Events
- [`cart-viewed.ts`](listeners/cart-viewed.ts) - Shopping cart views
- [`checkout-started.ts`](listeners/checkout-started.ts) - Checkout initiation
- [`checkout-step-viewed.ts`](listeners/checkout-step-viewed.ts) - Checkout step views
- [`checkout-step-completed.ts`](listeners/checkout-step-completed.ts) - Checkout step completion
- [`payment-info-entered.ts`](listeners/payment-info-entered.ts) - Payment information entry

### Order Events
- [`order-completed.ts`](listeners/order-completed.ts) - Order completion
- [`order-updated.ts`](listeners/order-updated.ts) - Order modifications
- [`order-cancelled.ts`](listeners/order-cancelled.ts) - Order cancellations
- [`order-refunded.ts`](listeners/order-refunded.ts) - Order refunds

### Coupon Events
- [`coupon-entered.ts`](listeners/coupon-entered.ts) - Coupon code entry
- [`coupon-applied.ts`](listeners/coupon-applied.ts) - Successful coupon application
- [`coupon-denied.ts`](listeners/coupon-denied.ts) - Failed coupon attempts
- [`coupon-removed.ts`](listeners/coupon-removed.ts) - Coupon removal

### Promotion Events
- [`promotion-viewed.ts`](listeners/promotion-viewed.ts) - Promotion displays
- [`promotion-clicked.ts`](listeners/promotion-clicked.ts) - Promotion interactions

### Wishlist Events
- [`wishlist-product-added.ts`](listeners/wishlist-product-added.ts) - Add to wishlist
- [`wishlist-product-removed.ts`](listeners/wishlist-product-removed.ts) - Remove from wishlist

## How It Works

1. **Initialization**: The tracker registers with Salla's analytics system when the SDK is ready
2. **Event Discovery**: Build-time plugin discovers all listener files and generates an auto-registry
3. **Event Handling**: When events occur, the tracker routes them to the appropriate listener
4. **Error Handling**: Any listener errors are caught and logged without breaking the flow

## Event Listener Structure

Each event listener follows a consistent pattern:

```typescript
import { EventPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.EVENT_NAME;

export default (payload: EventPayload): void => {
  console.log('EVENT NAME:', payload);

  // Add your custom tracking logic here
  // Example: Send to Google Analytics, Facebook Pixel, etc.
};
```

## Customization

### Adding Custom Logic

To add custom tracking logic to any event, simply modify the corresponding listener file:

```typescript
// src/listeners/product-viewed.ts
export default (payload: ProductViewedPayload): void => {
  console.log('PRODUCT VIEWED Event:', payload);

  // Send to Google Analytics
  gtag('event', 'view_item', {
    item_id: payload.product_id,
    item_name: payload.name,
    currency: payload.currency,
    value: payload.price
  });

  // Send to Facebook Pixel
  fbq('track', 'ViewContent', {
    content_ids: [payload.product_id],
    content_type: 'product',
    value: payload.price,
    currency: payload.currency
  });
};
```

### Creating New Listeners

To add a new event listener:

1. Create a new file in the `listeners/` directory
2. Export the `eventName` and default handler function
3. The build system will automatically discover and register it

## Dependencies

- [`@salla.sa/ecommerce-events-base`](../ecommerce-events-base/) - Base types and event definitions
- Salla Twilight SDK - Required for integration with Salla's platform

## Integration

This tracker is designed to work with Salla's ecommerce platform and requires the Salla Twilight SDK to be loaded before initialization.

```javascript
// The tracker automatically registers when Salla SDK is ready
window.Salla.onReady(() => {
  // Tracker is now active and listening for events
});
```

## Error Handling

The tracker includes built-in error handling:
- Validates Salla SDK availability
- Catches and logs individual listener errors
- Continues processing other events even if one fails

## Development

The package uses TypeScript for type safety and includes:
- Full type definitions for all event payloads
- Auto-completion support in IDEs
- Compile-time error checking

## License

MIT License - See the main project license for details.