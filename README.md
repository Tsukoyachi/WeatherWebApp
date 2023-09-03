# WeatherWebApp
A simple webapp that allow the user to check the current weather around him. Made with nodejs using express, body-parser, request, dotenv and ejs.

If you clone this repo it won't work straight away for one reason. The api I use need an API key that I store in a .env file similar to the .env.example in this repository. You have to create a free account here to get yours; https://www.weatherapi.com/

The version of node and npm I use :
- nodejs v18.17.1
- npm v9.6.7

Once you have your .env file all setup to run the project :
- npm install at the root of the project
- node index.js
- go on your browser to : localhost:3000