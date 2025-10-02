# Event Planner Client

This folder contains the frontend client for the Event Planner application, built with React. It provides users with an intuitive interface to create, manage, and participate in events.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow these steps to set up and run the client locally:

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd client
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Configure environment variables:**  
   Create a `.env` file in the root directory and add necessary variables (see [Environment Variables](#environment-variables)).
4. **Start the development server:**
    ```bash
    npm start
    ```
5. **Open the app:**  
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
client/
├── public/          # Static assets (index.html, favicon, etc.)
├── src/
│   ├── components/  # Reusable UI components
│   ├── pages/       # Application pages (Home, Events, Login, etc.)
│   ├── services/    # API calls and business logic
│   ├── utils/       # Utility functions
│   ├── App.js       # Main app component
│   └── index.js     # Entry point
├── package.json
└── README.md
```

## Features

- **User Authentication:** Sign up, log in, and manage sessions securely.
- **Event Creation & Management:** Create, edit, delete, and view events.
- **Event Participation:** RSVP and manage attendance.
- **Responsive UI:** Optimized for desktop and mobile devices.
- **Notifications:** Receive updates about events.
- **Search & Filter:** Find events by date, category, or location.

## Technologies Used

- [React](https://react.dev/)
- [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [React Router](https://reactrouter.com/) (for navigation)
- [Axios](https://axios-http.com/) (for API requests)
- [Material UI](https://mui.com/) or similar (for UI components)

## Available Scripts

- `npm start` — Runs the app in development mode.
- `npm run build` — Builds the app for production.
- `npm test` — Runs tests (if available).
- `npm run lint` — Checks code for linting errors.

## Environment Variables

Create a `.env` file in the root directory with the following variables as needed:

```
REACT_APP_API_URL=<your-backend-api-url>
REACT_APP_GOOGLE_MAPS_KEY=<your-google-maps-api-key>
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.