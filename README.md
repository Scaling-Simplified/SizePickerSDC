# Project Name

> Size Picker System Design Capstone

## Related Projects

- https://github.com/true-barracudas/sizepicker-service
- https://github.com/true-barracudas/sizepicker-proxy

## Development

### Installing Dependencies

From within the root directory:

```
npm install
```

### Mongoose CRUD Operations

Starting the server:

```
npm run dev-start
```

Path in which public directory gets served:
:id = Integer Between 1-100

```
localhost:3002/:id
```

#### GET - Getting Data From Mongoose Database

Path required to complete GET request:

```
/api/products/:id

:id = Id Of Product Id You Are Looking For
```

Response From GET Request:

```
{
  "_id": "string",
  "name": "string",
  "id": "integer",
  "category": "string",
  "color": "string",
  "price": "integer",
  "photoUrl": "string",
  "numOfReviews": "integer",
  "averageRating": "integer",
  "skus": "array",
  "__v": "integer"
}
```

#### DELETE - Deleting An Entry In Mongoose Database

Path required to complete DELETE request:

```
/api/products/:id

:id = Id Of Product Id You Are Looking To Delete
```

Response From DELETE Request:

```
On Success: 200
On Failure: 404
```

#### POST - Adding New Data Into Mongoose Database

Path required to complete POST request:

```
/api/products
```

Request Body Format Required:

```
{
  "name": "string",
  "id": "integer",
  "category": "string",
  "color": "string",
  "price": "integer",
  "photoUrl": "string",
  "numOfReviews": "integer",
  "averageRating": "integer",
  "skus": "array",
}
```

Response From POST Request:

```
On Success: 200
On Failure: 404
```

#### PUT - Updating Entry In Mongoose Database

Path required to complete PUT request:

```
/api/products
```

Request Body Format Required:

```
{
  "id": :id
  "data": { ":key": ":newData" }
}

(
  :id = Product Id You Wish To Update,
  :key = Schema Key You Are Looking To Update,
  :newData = Data You Would Like To Reassign To
)
```
