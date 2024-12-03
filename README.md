# TutorHub

TutorHub is an online platform designed to facilitate learning and collaboration among students and tutors. It offers various features such as coursebooks, announcements, feature wishlist, and more.

## Project Overview

TutorHub aims to provide a seamless and interactive learning experience. Users can access course materials, stay updated with announcements, and suggest new features.

## Setup Instructions
2. Install dependencies for the frontend:
    ```sh
    cd tutor-hub
    npm install
    ```

3. Install dependencies for the backend:
    ```sh
    cd auth-backend
    npm install
    ```

4. Create a `.env` file in the `auth-backend` directory and add your environment variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Start the backend server:
    ```sh
    cd auth-backend
    npm start
    ```

6. Start the frontend development server:
    ```sh
    cd tutor-hub
    npm start
    ```

7. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Tech Stack Details

- **Frontend:**
  - React
  - TypeScript
  - - Tailwind CSS
  - Framer Motion

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - JWT for authentication

## Future Improvements

- Implement a dark mode feature.
- Develop a mobile app version.
- Add more interactive elements to the coursebooks section.
- Enhance the user profile page with more customization options.
- Integrate a real-time chat feature for students and tutors.
