# VistaStay <img src="/file.svg" alt="logo" width="50" height="50" />

**VistaStay** is a full-featured web application that offers functionality similar to Airbnb, built with the **MERN tech stack** (MongoDB, Express.js, React, Node.js). This platform enables users to seamlessly list, explore, and book accommodations, while leveraging advanced features like AI assistance and personalized recommendations.

---

## Features

### 1. **Core Functionalities**
- **Create Listings**: Users can create detailed accommodation listings with images and descriptions.
- **Edit Listings**: Update information about any previously created listings.
- **Delete Listings**: Remove unwanted or outdated listings.
- **Search & Filter**: Advanced search functionality with multiple filter options to narrow down results.

### 2. **User Interaction**
- **Authorization & Authentication**: Secure login and signup using robust authentication mechanisms.
- **Reviews & Ratings**: Share feedback on stays with other users through reviews and ratings.
- **Your Picks**: Save and revisit your liked listings in the personalized "Your Picks" section.

### 3. **Advanced Features**
- **AI Assistant**: Integrated Google AI API to assist users with queries, recommendations, and navigation.
- **Responsive Design**: Fully responsive and optimized for mobile, tablet, and desktop devices.
- **MVC Architecture**: The application follows the Model-View-Controller design pattern to ensure scalability and maintainability.

---

## Technologies Used

### Frontend
- **HTML, CSS**: For building the user interface.
- **Bootstrap**: For responsive and user-friendly design.

### Backend
- **Node.js & Express.js**: For creating the server-side logic and APIs.
- **MongoDB**: As the database to store user data, listings, and reviews.

### AI Integration
- **Google AI API**: Powering the intelligent assistant feature for enhanced user experience.

### Miscellaneous
- **Cloudinary**: For image hosting and storage.
- **JWT**: For secure user authentication.

---

## Setup Instructions

### Prerequisites
- **Node.js**: Install the latest version of Node.js.
- **MongoDB**: Ensure you have MongoDB installed and running.

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Laxmirlola/VistaStay.git
   ```
2. Navigate to the project directory:
   ```bash
   cd VistaStay
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
4. Add environment variables:
   - Create a `.env` file in the `server` directory and include:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_URL=your_cloudinary_url
     GOOGLE_API_KEY=your_google_ai_api_key
     ```
5. Start the development server:
   ```bash
   cd server && nodemon app.js
   ```
6. Open your browser and navigate to `http://localhost:3000`.

---

## File Structure
```
VistaStay/
├── controllers
├── init
├── models
├── public
├── routes
├── uploads
├── utils
├── views
├── app.js
├── gitignore
└── README.md           
```

---

## Future Enhancements
- **Payment Gateway Integration**: For booking accommodations.
- **Advanced Analytics**: Track user engagement and optimize listings.
- **Multi-Language Support**: Expand accessibility for global users.

---

## Contribution
Contributions are welcome! Please fork the repository and create a pull request with your changes.

---


## Acknowledgments
- Inspired by Airbnb’s design and functionality.
- Powered by Google AI APIs and MERN Stack technologies.

