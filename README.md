This is a simple [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/) backend server project.

## Getting Started

Open a terminal, navigate to the project's folder and run:

```bash
npm install

```

Then, to start the server, run the following command:

```bash
node index.js

```

The server should now be running at [http://localhost:3001](http://localhost:3001), leaving the 3000 port available to run the frontend.

The available endpoints are:
api/products -> Returns a list of all products and their details.
api/stock-price/[sku] -> Returns the price and number of items in stock for a given product size-variant, identified by its SKU.

## Notes

An installation of Node.js is required to run the server.
