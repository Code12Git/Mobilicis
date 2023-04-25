Project Title:

Node.js Application with Express Framework and MongoDB Database

Project Description:

This project is a web application that uses the Node.js runtime environment, the Express.js web framework, and MongoDB database to fetch and display data in a tabular format on a frontend web page. The application connects to a MongoDB database that contains sample data in JSON format. The frontend is developed using React.

Prerequisites:

Before running this application, you must have the following software installed on your machine:

Node.js (version 14.x or later)
MongoDB (version 4.x or later)

Installation:

Clone the repository to your local machine.
Navigate to the project directory in the command line.
Run npm install to install the required dependencies.
Set up a MongoDB database.
Install MongoDB on your local machine following the instructions on the official MongoDB documentation.
Create a new MongoDB database and collection.
Create a .env file with the following details:
makefile
Copy code
MONGO_URI=<your MongoDB URI>
PORT=<port number for server>
Import the sample dataset from sample_data.json into your MongoDB collection.
Use the mongoimport command to import the data.
Run the application with npm start.

API Endpoints:

The following API endpoints are available:

Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
Endpoint: /api/users1
HTTP Method: GET
Response: An array of user objects.
Male Users which have phone price greater than 10,000.
Endpoint: /api/users2
HTTP Method: GET
Response: An array of user objects.
Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
Endpoint: /api/users3
HTTP Method: GET
Response: An array of user objects.
Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
Endpoint: /api/users4
HTTP Method: GET
Response: An array of user objects.
Show the data of top 10 cities which have the highest number of users and their average income.
Endpoint: /api/users/top-cities
HTTP Method: GET
Response: An array of city objects, each containing the city name, total number of users, and average income of those users.

MongoDB Connection:

The application connects to a MongoDB database using Mongoose ORM.
To set up the connection with MongoDB using Mongoose, follow these steps:

Install the Mongoose package by running the following command in your project directory:
Copy code
npm install mongoose
Require the Mongoose package in your Node.js application by adding the following code to your conn.js file:
javascript
Copy code
import mongoose from 'mongoose';
Connect to the MongoDB database by adding the following code to your conn.js file which is present in db folder:
javascript
Copy code
mongoose.set("strictQuery", false);
const connection = async () => {
  const URI = process.env.MONGO_URI;
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected Successfully!");
  } catch (err) {
    console.log("Unable to connect to database");
  }
};
Replace process.env.MONGO_URI with your own MongoDB URI in the .env file.
import conn.js file in server.js file.

Host Name and URLs
The application is hosted on localhost and the default port number is 8000.

Here are the URLs for the available endpoints:

GET /api/users1: http://localhost:8000/api/users1
GET /api/users2: http://localhost:8000/api/users2
GET /api/users3: http://localhost:8000/api/users3
GET /api/users4: http://localhost:8000/api/users4
GET /api/users/top-cities: http://localhost:8000/api/users/top-cities