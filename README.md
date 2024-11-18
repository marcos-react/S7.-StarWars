
# STARWARS Application

An interactive application built with React, showcasing Star Wars spaceships. This app utilizes Firebase for authentication and SWAPI for dynamic spaceship data. Designed for easy development and collaboration using Visual Studio Code.

## Features

- User Authentication: Secure login and registration with Firebase.
- Protected Routes: Only logged-in users can access certain pages.
- Spaceship Details: Browse and view details of Star Wars spaceships fetched from the SWAPI.
- Responsive Design: Built with TailwindCSS for a seamless UI experience.

## Requirements

Make sure you have the following installed:

- Node.js (v14 or later)
- npm or yarn
- Visual Studio Code
- Firebase project set up with Authentication enabled

## Installation

Follow these steps to install and run the application locally:

1. Clone the repository:

git clone https://github.com/marcos-react/S7.-StarWars/ 

cd S7.-StarWars

2. Install dependencies:

npm install


## How to Run the Application

npm dev run

Open the URL in your web browser.


## Project Structure

1. Add Firebase configuration:

- In the src/ folder, create a firebaseConfig.js file.
- Copy your Firebase project credentials (API Key, authDomain, etc.) and paste them as shown below:

    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";

    const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    };

    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);

2. Start the development server:

npm run dev

3. Open in your browser:

By default, the app will run at http://localhost:5173.



Here is a brief overview of the main files and folders:

    ├── src
    │   ├── components      # Reusable UI components
    │   ├── context         # Global state management using React Context
    │   ├── pages           # Application pages (e.g., Login, Starships)
    │   ├── App.jsx         # Main application entry
    │   ├── main.jsx        # React entry point
    │   ├── firebaseConfig.js # Firebase configuration file
    ├── public              # Static assets (images, icons)
    ├── package.json        # Dependencies and npm scripts
    └── README.md           # Project documentation


## How to Use

1. Authenticate:

Register as a new user or log in with an existing account.
Only logged-in users can access the "Starships" page.

2. Explore Starships:

Navigate to the "Starships" page to view the list of Star Wars spaceships.
Click on a spaceship to see its details.

## Technologies Used

Frontend: React.js, TailwindCSS
Authentication: Firebase
API: SWAPI (Star Wars API)
Development Environment: Visual Studio Code