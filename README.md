# Weather Application using Node.js and Express.js

This application allows users to fetch real-time weather data using the OpenWeatherMap API based on the city entered.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- VS Code or any preferred text editor
- OpenWeatherMap API key

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>` 

2.  **Install Dependencies**
    
    bash
    
    Copy code
    
    `npm install express axios body-parser ejs` 
    
3.  **Set Up Environment Variables** Create a `.env` file in the root directory and add your OpenWeatherMap API key:
    
    plaintext
    
    Copy code
    
    `API_KEY=your_openweathermap_api_key` 
    
4.  **Run the Application**
    
    bash
    
    Copy code
    
    `node app.js` 
    
    The application will start at `http://localhost:3000`.
    

## Project Structure

bash

Copy code

`weather-app/
│
├── app.js              # Main application file
├── views/              # EJS templates
│   └── index.ejs       # Main page template
├── public/             # Static assets (CSS, images)
│   └── styles.css      # Custom styles
├── .env                # Environment variables
└── README.md           # Project documentation` 

## Usage

1.  **Enter City Name**
    
    -   Open your browser and go to `http://localhost:3000`.
    -   Enter the name of a city in the input field.
    -   Click on **Get Weather**.
2.  **View Weather Details**
    
    -   Upon submission, the application fetches and displays weather details such as temperature, clouds, humidity, and wind speed.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your improvements.
