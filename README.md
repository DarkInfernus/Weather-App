# Weather App Project

Welcome to the Weather App project! This README provides a step-by-step guide to setting up and running the project on your local machine.

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)

## Setup Instructions

1. **Clone the Repository:**
   - Go to the directory where you want to store the project.
   - Open your terminal in that directory.
   - Run the following command in the terminal:
     ```
     git clone https://github.com/DarkInfernus/Weather-App.git
     ```

2. **Open the Project in Visual Studio Code:**
   - Open the cloned `Weather-App` directory in Visual Studio Code.

3. **Install Dependencies:**
   - Open a terminal in Visual Studio Code.
   - Navigate to the project directory using the terminal.
   - Run the following command to install project dependencies:
     ```
     npm install
     ```

4. **Sign Up for API Providers:**
   - WeatherStack:
     - Go to [weatherstack sign-up](https://weatherstack.com/signup/free) and create an account.
     - Copy the API Access Key from your weatherstack dashboard.
   - Mapbox:
     - Go to [mapbox sign-up](https://account.mapbox.com/auth/signup/) and create an account.
     - Provide your debit card details (no charges for less than 100,000 API requests).
     - Verify your email and copy the Default Public Token from your mapbox account.

5. **Configure API Keys:**
   - Rename the `.env.example` file in the project to `.env`.
   - Open the `.env` file and replace the following placeholders with your API keys:
     ```
     WEATHER_API_KEY="YOUR_WEATHERSTACK_API_KEY"
     GEOCODE_ACCESS_TOKEN="YOUR_MAPBOX_PUBLIC_TOKEN"
     ```

6. **Run the Project:**
   - In the terminal, navigate to the `Weather-App` directory.
   - Run the following command to start the application:
     ```
     node src/app.js
     ```

7. **View the App:**
   - Open your web browser and type the following URL:
     ```
     http://localhost:3000
     ```

Congratulations! You've successfully set up and run the Weather App project on your local machine.

