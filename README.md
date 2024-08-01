# Property Rental Platform

  The Property Rental Platform is a modern web application built with React, designed to mimic a property rental service. The application showcases a variety of rental properties, allows users to view details, and facilitates the booking process. It features responsive design to ensure a seamless experience across different devices.

## Features
 - Property Listings: Browse a wide range of rental properties with detailed information including images, descriptions, location, price, and other criteria.
 - Property Details: View comprehensive details about each property, including amenities and availability.
 - Booking Management: Select and book properties through a straightforward process.
 - Responsive Design: Optimized for different screen sizes and devices.
 - User Authentication (Optional): Users can sign up, log in, and manage their profiles (if implemented).

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites
- Node.js v22.5.1
- npm or yarn
- MariaDB or your preferred SQL database

### Backend Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/sairamdasari7/totality-frontend-challenge.git
    cd rental-app
    ```

2. Install backend dependencies:
    ```sh
    cd backend
    npm install
    # or
    yarn install
    ```

3. Configure the database:
    - Create a `.env` file in the `backend` directory and add your database credentials:
      ```env
      DB_HOST=your_database_host
      DB_USER=your_database_user
      DB_PASS=your_database_password
      DB_NAME=your_database_name
      ```

4. Run database migrations:
    ```sh
    npx sequelize-cli db:migrate
    ```

5. Start the backend server:
    ```sh
    npm start
    # or
    yarn start
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install frontend dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Start the frontend development server:
    ```sh
    npm start
    # or
    yarn start
    ```

## Usage
1. Open your browser and navigate to `https://homeforrent.netlify.app/`.
2. Register a new account or log in with an existing account.
3. Browse property listings, manage bookings, and complete the checkout process.
4. Optional: Add properties to your favorites list and leave reviews for properties.

## Features
- Property Listings: View detailed information about available properties.
- Booking Management: Book properties and manage your bookings.
- Checkout Process: Complete the checkout process for your bookings.
- User Authentication: Register and log in to access platform features.
- Property Reviews: Leave and view reviews for properties.
- Favorites List: Add properties to your favorites list for easy access.

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any improvements or bug fixes.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

