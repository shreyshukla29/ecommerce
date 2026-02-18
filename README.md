🛒 Full-Stack E-Commerce Platform

Author: Shrey Shukla
Tech Stack: MERN (MongoDB, Express.js, React.js, Node.js)

------------------------------------------------------------------------

📌 Project Overview

This is a production-ready full-stack e-commerce platform built using
the MERN stack.
It provides a complete online shopping experience including
authentication, product browsing, cart management, order handling, and
secure payment integration.

An admin dashboard is also included for managing products, categories,
and customer orders.

------------------------------------------------------------------------

✨ Features

👤 User Features

-   User registration and login
-   JWT-based authentication
-   Browse and search products
-   View product details
-   Add/remove items from cart
-   Checkout and place orders
-   View order history

🛠 Admin Features

-   Add new products
-   Update existing products
-   Delete products
-   Manage categories
-   View all orders
-   Update order status

------------------------------------------------------------------------

🧱 Tech Stack

Frontend

-   React.js
-   Context API / Redux
-   Axios
-   CSS / Tailwind

Backend

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose

Authentication

-   JWT
-   bcrypt

Payments

-   Stripe

------------------------------------------------------------------------

📁 Project Structure

    project-root/
    │
    ├── client/         # React frontend
    ├── server/         # Express backend
    ├── screenshots/    # Screenshots
    └── README.md

------------------------------------------------------------------------

⚙️ Installation

Clone Repository

    git clone https://github.com/your-username/ecommerce.git
    cd ecommerce

Install Dependencies

Frontend:

    cd client
    npm install

Backend:

    cd server
    npm install

------------------------------------------------------------------------

🔐 Environment Variables

Create .env file inside server folder:

    PORT=4000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret

------------------------------------------------------------------------

▶️ Run Application

Backend:

    cd server
    npm run dev

Frontend:

    cd client
    npm start

------------------------------------------------------------------------

🌐 Usage

Open:

    http://localhost:3000

Admin Panel:

    http://localhost:3000/admin

------------------------------------------------------------------------

🔒 Security

-   JWT authentication
-   Password hashing using bcrypt
-   Protected API routes
-   Environment variable protection

------------------------------------------------------------------------

🚀 Future Improvements

-   Product reviews and ratings
-   Wishlist
-   Email notifications
-   Order tracking
-   Docker deployment

------------------------------------------------------------------------

👨‍💻 Author

Shrey Shukla
GitHub: https://github.com/shreyshukla29

------------------------------------------------------------------------

⭐ Support

If you like this project, give it a star on GitHub.
