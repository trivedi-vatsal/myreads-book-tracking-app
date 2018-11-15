#  MyReads: A Book Tracking App

## Overview:
Udacity front end developer nanodegree project

It is a bookshelf app that allows the user to select and categorize books that he/she has read,
are currently reading, or want to read. The project emphasizes using React to build the application
and provides an API server and client library that is used to persist information as the user interacts
with the application.

### Start the App:
* Clone this repository.
* Navigate to the cloned file and type the following command:
	`npm install`
* Then:
	`npm start`
* The browser will automatically open the App. If it doesn't, visit http://localhost:3000/

### Start the App in Production Mode:
* To run the App in production mode:
	`npm run build`
* Then:
	`python -m SimpleHTTPServer 8000`
* Then the App should run on (http://localhost:8000).

### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of
search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are
the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket
Weaving or Bubble Wrap don't come back with any results.

### Technologies & Packages:
* [Reactjs:](https://reactjs.org)
* [Book Lender API:](https://reactnd-books-api.udacity.com) It is a book library provided by Udacity
