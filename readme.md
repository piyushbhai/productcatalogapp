# Product Catalog Application

## Overview
This is a **Full-Stack Product Catalog Application** built using:
- **Backend:** Nest.js (TypeORM, PostgreSQL, JWT Authentication)
- **Frontend:** Next.js (React, Tailwind CSS)
- **Database:** PostgreSQL (Dockerized)

This application allows users to **view, add, delete, and search for products** with authentication.

## Features
### Backend (Nest.js + PostgreSQL)
- Product CRUD operations
- Authentication using JWT
- PostgreSQL database with TypeORM
- Error handling and validation
- Modular structure following Nest.js best practices

### Frontend (Next.js + React + Tailwind CSS)
- Fetch and display products
- Add new products (form validation included)
- User authentication (Login/Register)
- Search and filter products

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/) (if running manually)

## Installation
### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/product-catalog.git
cd product-catalog
```

### 2. Set Up the Backend
#### Navigate to the backend folder
```sh
cd backend
```
#### Install dependencies
```sh
npm install
```
#### Start PostgreSQL using Docker
```sh
docker-compose up -d
```
#### Configure Environment Variables
Create a `.env` file in the `backend/` folder:
```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=user
DATABASE_PASSWORD=password
DATABASE_NAME=product_catalog
JWT_SECRET=your_secret_key
```
#### Run Migrations (if applicable)
```sh
npm run migration:run
```
#### Start the Backend Server
```sh
npm run start:dev
```
The backend API will be available at: `http://localhost:3001`

### 3. Set Up the Frontend
#### Navigate to the frontend folder
```sh
cd ../frontend
```
#### Install dependencies
```sh
npm install
```
#### Start the Next.js frontend
```sh
npm run dev
```
The frontend UI will be available at: `http://localhost:3000`

## API Documentation
### Authentication Endpoints
| Method | Endpoint        | Description      |
|--------|----------------|------------------|
| POST   | `/auth/signup` | Register a user |
| POST   | `/auth/login`  | Login user, returns JWT |

### Product Endpoints
| Method | Endpoint         | Description          |
|--------|-----------------|----------------------|
| GET    | `/products`      | Fetch all products  |
| POST   | `/products`      | Add a new product (Auth required) |
| DELETE | `/products/:id`  | Delete product by ID (Auth required) |

## Authentication Flow
1. **Register/Login** → Obtain a JWT token.
2. **Include JWT in Authorization Header**
   ```sh
   Authorization: Bearer YOUR_TOKEN
   ```
3. **Protected Routes** (Adding/Deleting products requires authentication)

## Bonus Features
- JWT-based authentication with role-based access
- Product search and filtering
- Responsive UI with Tailwind CSS

## Contributing
Feel free to contribute by forking the repo and submitting pull requests.

## License
This project is open-source under the MIT License.

