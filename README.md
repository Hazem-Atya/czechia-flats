# Czechia Flats

This project provides a better design of the main page of the [Sreality](https://www.sreality.cz/en/search/for-sale/apartments) website (which is a  platform for searching apartments in the Czech Republic). The data used in is scrapped from from the Sreality website.

![image](https://github.com/Hazem-Atya/czechia-flats/assets/53778545/0b28d230-5cd3-44c8-8b2c-a30966ab8f91)


## Project Overview

### Services
Our project comprises the following services:

- **Postgres**: This service uses a PostgreSQL database to store the apartment data retrieved from the Sreality website.

- **Scraper**: A Python script powered by Selenium that  extracts information from the Sreality website. It focuses on the first 500 apartments listed and stores them in our database.

- **API**:  API developed using FastAPI, providing a single endpoint for users to access the flats we've stored in our database. This API is the bridge between the data and the frontend.

- **Frontend**: The frontend of our application is built using React and TypeScript. 

### Technologies

- **Database (DB)**: PostgreSQL.

- **Scraper**: Python, in combination with Selenium, to scrape the Sreality website.

- **API**: FastAPI. 

- **Frontend**: React with TypeScript.

- **Docker and Docker Compose**: We containerize our project to simplify deployment and ensure consistency across different environments.

## Getting Started

To run the project, follow these steps:

1. Ensure you have Docker installed on your system.

2. Clone this repository to your local machine.

3. Open your terminal and navigate to the project directory.

4. To start the project along with the scraper, use the following command:
   ```bash
   docker compose up --build


  This will initialize the entire project, including the database, scraper, API, and frontend.
  
5. If you already have data in your local database and wish to run only the frontend, use this command to avoid data duplication:
   ```bash
   docker compose up --build frontend

 ### Note
If the data does not appear, it may be due to the scraper not working successfully. You can try restarting it using:
 ```bash
   docker compose up scrapper
