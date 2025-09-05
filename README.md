# Ravel Social

A mobile app built with React Native using Expo. It prompts users to take photos hourly, extracts metadata, and recommends shared activities between friends. You're looking at the early-stage MVP.

## PREREQUISITES

1. [Visual Studio Code](https://code.visualstudio.com/) with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)  
1. [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)  
1. [Expo Go](https://expo.dev/client) installed on your phone (iOS or Android)  

## Local Development Guide

### Running Development Server

1. Clone the project

1. Open project in devcontainer. All subsequent commands should be executed within devcontainer.

1. Install dependencies

   ```
   npm install
   ```

1. Start the development server

   ```
   npm run start:tunnel
   ```

1. In the terminal, press `s` to switch to Expo Go mode if prompted.

1. You should now see the QR code in your terminal. Scan it with the Expo Go app to load the app on your device.

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
