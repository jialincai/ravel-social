# Ravel Social

A mobile app built with React Native using Expo. It prompts users to take photos hourly, extracts metadata, and recommends shared activities between friends. You're looking at the early-stage MVP.

## PREREQUISITES

1. Node.js
1. git
1. Expo Go (installed on your phone)

## Local Development Guide

1. Clone the project

1. (Optional) Sign into your Expo organization in the Expo Go app (if using team features or accesing private projects)

1. Install global Expo helpers

   ```
   npm install --global @expo/ngrok@^4.1.0
   npm install --global eas-cli
   ```

1. (Optional) Initialize EAS project (if building remotely later)

   ```
   eas init --id <expo_project_id>
   ```

1. Install dependencies

   ```
   npm install
   ```

1. Start the development server

   ```
   npx expo start --tunnel
   ```

1. In the terminal, press s to switch to GO mode if needed

1. Scan the QR code using the Expo Go app on your phone
