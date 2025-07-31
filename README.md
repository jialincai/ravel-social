# Ravel Social

A mobile app built with React Native using Expo. It prompts users to take photos hourly, extracts metadata, and recommends shared activities between friends. You're looking at the early-stage MVP.

## PREREQUISITES

1. Node.js
1. git
1. Expo Go (installed on your phone)
1. Docker
1. Docker Compose

## Local Development Guide

### Running Development Server

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
   npm run start:tunnel
   ```

1. In the terminal, press s to switch to GO mode if needed

1. Scan the QR code using the Expo Go app on your phone

### Running Local Database

1. Navigate to the backend directory

   ```
   cd src/backend
   ```

1. Create a local environment file with your Postgres password

   ```
   touch .env
   echo POSTGRES_PASSWORD=<your_password_here> >> .env
   ```

1. Build the Docker image

   ```
   docker compose build
   ```

1. Start the database and Adminer UI

   ```
   docker compose up
   ```

1. Access the Adminer GUI at [http://localhost:8080](http://localhost:8080).

   Use the following connection settings:

   ```
   System:   PostgreSQL
   Server:   db
   Username: postgres
   Password: <your_password_here>
   Database: raveldb
   ```

1. Stop containers.

   Optional `-v` flag to remove database volumes (i.e. data).

   ```
   docker compose down
   ```

### Linting

1. Automatically apply lint fixes.

   ```
   npm run lint:fix
   ```
