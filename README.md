# Grab Clone Mobile App

This repository contains a refreshed Expo + React Native codebase that prototypes a Grab-like super-app experience. It provides feature-focused screens for ride hailing, food delivery, parcel tracking, wallet management, and profile management, all powered by a shared application context. The goal is to offer a clean starting point for building a modern mobility and delivery application.

## Features

- **Multi-service home screen** with active ride summary, quick services grid, personalised promotions, and dynamic location messaging.
- **Ride planning flow** that captures pickup/drop-off details, highlights vehicle categories, and schedules future trips through shared state.
- **Delivery dashboard** with parcel tracking, live courier updates, and suggested deals surfaced from the application context.
- **Wallet management** surface showing real-time balance, membership rewards, quick actions, and recent transactions.
- **Profile centre** featuring avatar, membership stats, earned badges, and contact information cards.
- **Shared theming and context** layers that keep colors, spacing, typography, and mock data consistent across screens.
- **Reusable UI components** such as buttons, information cards, section headers, and service shortcuts to speed up feature delivery.

## Tech Stack

- [Expo](https://expo.dev/) (SDK 50) for rapid mobile development and unified tooling.
- [React Native](https://reactnative.dev/) with TypeScript for strongly typed UI development.
- [React Navigation](https://reactnavigation.org/) for stack and tab navigation architecture.

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the app**

   ```bash
   npm run start
   ```

   Use the Expo CLI output to launch the iOS simulator, Android emulator, or Expo Go on your device.

3. **Lint the project**

   ```bash
   npm run lint
   ```

## Project Structure

```
├── App.tsx
├── app.json
├── assets/
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── navigation/
│   ├── screens/
│   ├── theme/
│   ├── types/
│   └── utils/
├── index.js
├── package.json
├── tsconfig.json
└── README.md
```

## Next Steps

- Connect to live services for ride, delivery, and wallet data.
- Integrate maps and geolocation for real-time tracking.
- Add authentication, push notifications, and analytics tooling.
- Polish UI with icons, imagery, and animations for production readiness.

Feel free to extend this base to match your product vision!
