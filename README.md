# Store Events Tracker

A TypeScript-based ecommerce events tracker that integrates with Salla's analytics platform. This package provides a comprehensive set of event listeners for tracking various Salla ecommerce activities based on Segment's ecommerce v2 specification.

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

```ini
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
// The tracker automatically registers when Salla Twlight SDK is ready
window.Salla.onReady(() => {
  // Tracker is now active and listening for events
});
```

## Error Handling

The tracker includes built-in error handling:

- Validates Salla Twlight SDK availability
- Catches and logs individual listener errors
- Continues processing other events even if one fails

## Development

The package uses TypeScript for type safety and includes:

- Full type definitions for all event payloads
- Auto-completion support in IDEs
- Compile-time error checking

## Local Development

### Prerequisites

- Node.js (version 16 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd store-events-tracker-starter-kit
```

2. Install dependencies:

```bash
pnpm install
```

### Development Commands

- **Start development server**:

```bash
pnpm dev
```

This starts the Vite development server with hot reload

- **Build for production**:

```bash
pnpm build
```

Compiles TypeScript and bundles the project

- **Preview production build**:

```bash
pnpm preview
```

Serves the production build locally for testing

- **Type checking**:

```bash
pnpm type-check
```

Runs TypeScript compiler to check for type errors

### Testing Your Changes

1. Start the development server:

```bash
pnpm dev
```

2. Open [`example.html`](example.html) in your browser or visit the local server URL

3. Open browser developer tools to see event tracking in the console

4. Interact with the page to trigger events and verify your listeners are working

### Project Structure

```ini
store-events-tracker-starter-kit/
├── src/
│   ├── index.ts                    # Main entry point
│   ├── auto-listeners-registry.ts  # Auto-generated listener registry
│   └── listeners/                  # Event listener implementations
├── example.html                    # Example implementation
├── package.json                    # Project configuration
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite build configuration
└── README.md                       # This file
```

### Adding New Event Listeners

1. Create a new TypeScript file in [`src/listeners/`](src/listeners/)

2. Follow the established pattern:

```typescript
import { EventPayload, EcommerceEvents } from '@salla.sa/ecommerce-events-base';

export const eventName = EcommerceEvents.YOUR_EVENT_NAME;

export default (payload: EventPayload): void => {
  console.log('YOUR EVENT:', payload);
  // Add your custom logic here
};
```

3. The build system will automatically discover and register your new listener

4. Test your changes using the development server

### Debugging

- Use browser developer tools to inspect console logs
- Check the Network tab for any failed requests
- Verify that the Twilight SDK is properly loaded before the tracker initializes
- Use TypeScript's type checking to catch errors early: `pnpm type-check`

## Publishing the Tracker

Once you've customized your event listeners and tested your tracker locally, you can publish it as a Salla app to make it available to merchants. Follow these steps to publish your tracker:

### Step 1: Create an App in Salla Partners Portal

1. Visit [https://portal.salla.partners/](https://portal.salla.partners/)
2. Sign in with your Salla Partners account
3. Create a new app and configure its basic settings
4. Note down your app's details for the next steps

### Step 2: Build and Upload the Tracker

1. Build your tracker for production:

```bash
pnpm build
```

This creates a `dist/tracker.js` file containing your compiled tracker

2. Upload the `dist/tracker.js` file to your preferred CDN service (e.g., AWS CloudFront, Cloudflare, or any other CDN)

3. Make note of the CDN URL where your `tracker.js` file is hosted

### Step 3: Add Tracker as Snippet

1. In the [Salla Partners Portal](https://portal.salla.partners/), navigate to your app
2. Go to the ["Snippet"](https://salla.dev/blog/a-guide-to-app-snippet/) section
3. Add a new Snippet with the CDN URL of your `tracker.js` file

### Step 4: Test in Demo Store

1. Install your app in the demo store provided by Salla Partners Portal
2. Navigate through the demo store and perform various actions (view products, add to cart, checkout, etc.)
3. Open browser developer tools and check the console to verify your event listeners are working correctly
4. Test all the events you've customized to ensure they're tracking properly

### Step 5: Publish the App

1. Once you've verified everything works correctly in the demo store
2. Return to the [Salla Partners Portal](https://portal.salla.partners/)
3. Navigate to your app and publish the changes
4. Your tracker will now be available for merchants to install and use

### Important Notes

- **Testing**: Always thoroughly test your tracker in the demo store before publishing
- **Performance**: Ensure your tracker doesn't negatively impact store performance
- **Error Handling**: The built-in error handling ensures individual listener failures don't break the entire tracking system
- **Updates**: When you make changes to your tracker, repeat the build and upload process, then update the snapbit URL if necessary

### Troubleshooting

- **Events not firing**: Check that the Salla Twilight SDK is properly loaded before your tracker
- **Console errors**: Review your event listener implementations for any JavaScript errors
- **Missing events**: Verify that all your custom event listeners are properly exported and follow the correct pattern

## License

MIT License - See the main project license for details.
