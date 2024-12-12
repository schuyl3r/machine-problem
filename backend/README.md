# Backend Setup

## Prerequisites

- Node.js
- npm

## Installation

1. Navigate to backend directory
2. Run `npm install`

## Running the Server

- Development: `npm run dev`

## Endpoints

- GET /api/products - Retrieve all products
- GET /api/products/types - Get distinct product types
- GET /api/products/:id - Get product by ID
- POST /api/products - Add a new product
- DELETE /api/products/:id - Delete a product by ID

## Limitations
- CSV file as a basic data storage, which is not scalable for large datasets
- No authentication or authorization
- Bare minimum data validation and error handling
