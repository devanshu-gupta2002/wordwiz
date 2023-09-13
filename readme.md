# WordWiz

WordWiz is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js) that allows users to learn and practice vocabulary in various languages. It incorporates features such as user authentication, a leaderboard to promote healthy competition, and support for multiple languages. This README.md file provides instructions on how to set up the project locally and highlights the key features and technologies used.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)


## Project Overview

WordWiz is designed to help users improve their vocabulary in a fun and engaging way. It offers a variety of languages to choose from and provides a leaderboard to encourage users to compete and track their progress.

## Features

### 1. User Authentication
   - Users can create accounts and log in securely using JWT (JSON Web Tokens) for authentication.
   - Passwords are securely hashed using bcrypt for enhanced security.

### 2. Leaderboard
   - WordWiz includes a leaderboard that displays user rankings based on their vocabulary proficiency.
   - Users can see how they stack up against others and track their progress.

### 3. Language Variety
   - WordWiz supports multiple languages, allowing users to choose the language they want to learn.
   - Users can switch between languages and access language-specific vocabulary exercises.

## Technologies Used

- **Frontend:**
  - React: JavaScript library for building user interfaces.
  - Redux: State management for the frontend.
  - Tailwind CSS: A utility-first CSS framework for styling.

- **Backend:**
  - Node.js: JavaScript runtime for server-side development.
  - Express.js: Web application framework for Node.js.
  - MongoDB: A NoSQL database for storing user data and vocabulary.

## Getting Started

### Prerequisites

Before setting up WordWiz locally, ensure that you have the following software installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/)

### Installation

Follow these steps to set up the WordWiz project locally:

1. Clone the repository to your local machine:

   ```
   git clone git@github.com:devanshu-gupta2002/wordwiz.git
   ```

2. Navigate to the project directory:

   ```
   cd wordwiz
   ```

3. Install server dependencies:

   ```
   cd server
   npm install
   ```

4. Install client dependencies:

   ```
   cd ../client
   npm install
   ```

5. Create a `.env` file in the `server` directory and configure your environment variables:

   ```
   PORT=3001
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   ```

6. Start the server:

   ```
   cd ../server
   npm run dev
   ```

7. Start the client:

   ```
   cd ../client
   npm start
   ```

WordWiz should now be running locally. You can access it by opening your browser and navigating to `http://localhost:3000`.

## Usage

- Register for an account and log in.
- Choose a language to learn from the available options.
- Start practicing vocabulary.
- Check the leaderboard to see your ranking and compete with other users.


