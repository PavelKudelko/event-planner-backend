# Event Planner API

A backend API built with Node.js and MongoDB for managing events. The API supports user authentication and authorization, includes roles (admin and regular) and enforce role-based access control (RBAC).  

---

### Technologies Used
**Node.js** | **Express.js** | **MongoDB** | **Mongoose** | **JWT (JSON Web Tokens)** | **Bcrypt** | **Joi** | **Morgan**

### Features
- **User Registration and Authentication**: Register and log in as a regular user or admin.
- **Create Events**: Admin users can add new events to the database.
- **Retrieve All Events**: Filter events by query parameters such as location, date, and more.
- **Retrieve Event by ID**: Get details of a specific event by its ID.
- **Update Events**: Admin users can update event details.
- **Delete Events**: Admin users can delete an event.
- **Secure Authorization**: Endpoints are protected by JWT-based authentication.


### API Endpoints
| Method | Endpoint          | Description                         |
|--------|-------------------|-------------------------------------|
| GET    | `/events`         | Retrieve all events with filters.   |
| GET    | `/events/:id`     | Retrieve a specific event by ID.    |
| POST   | `/events`         | Create a new event.                 |
| PUT    | `/events/:id`     | Update an event by ID.              |
| DELETE | `/events/:id`     | Delete an event by ID.              |
| POST   | `/auth/register`  | User registration                   |
| POST   | `/auth/login`     | User login                          |

