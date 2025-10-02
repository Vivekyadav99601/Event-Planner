# Event Planner Backend

This repository contains the backend server for the Event Planner application. It provides RESTful APIs for managing events, users, and RSVPs.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- User authentication and authorization (JWT)
- Create, update, delete, and view events
- RSVP to events
- Admin controls for event management
- Secure password hashing
- Error handling and validation

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT for authentication
- dotenv for environment variables

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB instance

### Installation

```bash
git clone https://github.com/yourusername/event-planner-backend.git
cd event-planner-backend
npm install
```

### Configuration

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Running the Server

```bash
npm start
```

Server runs on `http://localhost:5000` by default.

## API Endpoints

### Auth

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT

### Events

- `GET /api/events` — List all events
- `POST /api/events` — Create a new event (admin only)
- `GET /api/events/:id` — Get event details
- `PUT /api/events/:id` — Update event (admin only)
- `DELETE /api/events/:id` — Delete event (admin only)

### RSVP

- `POST /api/events/:id/rsvp` — RSVP to an event
- `GET /api/events/:id/rsvps` — List RSVPs for an event (admin only)

## Environment Variables

| Variable    | Description                  |
|-------------|-----------------------------|
| PORT        | Server port                 |
| MONGO_URI   | MongoDB connection string   |
| JWT_SECRET  | JWT signing secret          |

## Folder Structure

```
server/
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── app.js
├── server.js
└── README.md
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

## License

This project is licensed under the MIT License.
