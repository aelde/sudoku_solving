# Grab Clone Mobile App

This repository contains a fresh Expo + React Native codebase that prototypes a Grab-like super-app experience. It provides feature-focused screens for ride hailing, food delivery, parcel tracking, wallet management, and profile management. The goal is to offer a clean starting point for building a modern mobility and delivery application.

## Features

- **Multi-service home screen** with active ride summary, quick actions, and dynamic location messaging.
- **Ride booking flow** showcasing vehicle category selection and confirmation call to action.
- **Delivery dashboard** with parcel tracking card and nearby food recommendations.
- **Wallet management** displaying GrabPay balance with top-up and transfer shortcuts.
- **Profile area** placeholder for future account settings.
- **Shared theming system** for consistent colors, spacing, and typography values across components.
- **Reusable UI components** such as buttons, information cards, and service shortcuts to speed up feature delivery.

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
│   ├── hooks/
│   ├── navigation/
│   ├── screens/
│   ├── services/
│   └── theme/
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
