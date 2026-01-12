# Mini E-Commerce Backend (MERN Stack)

## Overview

This is the backend for a mini e-commerce application built with **Node.js, Express, and MongoDB**.
It supports **user authentication**, **product management**, and **cart functionality**. Admins can manage products, and users can add products to their cart.

---

## Features

### Authentication

* **POST /api/auth/register** – Register a new user
* **POST /api/auth/login** – Login and get a JWT token
* Role-based access: `"user"` or `"admin"`

### Product Management (Admin Only)

* **POST /api/products** – Add a product
* **PUT /api/products/:id** – Update a product
* **DELETE /api/products/:id** – Delete a product
* **GET /api/products** – List products (supports search & filter by category)

### Cart (User Only)

* **POST /api/cart/add** – Add a product to the cart
* **GET /api/cart** – Get current user’s cart
* **PUT /api/cart/update/:productId** – Update quantity
* **DELETE /api/cart/remove/:productId** – Remove product from cart

---

## Setup Instructions

1. Clone the repository:

```bash
git clone <your-repo-link>
cd <repo-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root:

```env
PORT=3000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=your_jwt_secret
```

4. Run the server:

```bash
node index.js
```

Server runs at: `http://localhost:3000`

---

## Testing

Use **Postman** or similar tools to test API endpoints.

* Include JWT token in **Authorization header** for protected routes:

```
Authorization: Bearer <token>
```

---

## Notes

* Products must be created by an admin user.
* Cart functionality requires a logged-in user.
* Passwords are hashed using bcrypt.

---

## Author

**Hrutuja Khodke**
Email: hrutujakhodke@gmail.com

