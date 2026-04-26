# Persons API

A REST API for managing a list of persons with full CRUD operations, statistics, and filtering by gender and type.

This project includes:

- strict validation layer
- unit tests (API, service, validator)
- CI pipeline (GitHub Actions)
- linting + pre-commit hooks (Husky)

---

## Features

- Full CRUD operations on persons
- Filter persons by gender and type via query params
- Person statistics endpoint
- Strict validation — no extra fields, no missing fields, no invalid types
- Fully tested — api, service and validator layers
- CI pipeline with automated test and lint checks
- Pre-commit hook enforcement via Husky

---

## Installation

```bash
git clone https://github.com/Adam-hash-a11y/persons-api.git
cd persons-api
npm install
```

## Environment Variables

Create a `.env` file in the root:
PORT=5000

## Run

```bash
npm run dev
```

## Tests

```bash
npm run test
```

---

## Endpoints

### GET /api/persons

Returns all persons. Supports optional query params.
GET /api/persons
GET /api/persons?gender=male
GET /api/persons?type=kid
GET /api/persons?gender=male&type=kid

**Response 200**

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 25,
    "gender": "male",
    "type": "men"
  }
]
```

**Error responses**

```json
{ "message": "invalid query params" }
{ "message": "gender must be male or female" }
{ "message": "type must be kid, men or women" }
```

---

### GET /api/persons/stats

Returns count of kids, men and women.

**Response 200**

```json
{
  "Number of kids": 2,
  "Number of men": 4,
  "Number of women": 3
}
```

---

### GET /api/persons/:id

Returns a person by id.

**Response 200**

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 25,
    "gender": "male",
    "type": "men"
  }
]
```

**Error responses**

```json
{ "error": "invalid id, the id must a number" }
{ "error": "person is not found" }
```

---

### POST /api/persons/add-person

Adds a new person to the list.

**Request body**

```json
{
  "id": 100,
  "name": "Adam Hamdi",
  "age": 25,
  "gender": "male",
  "type": "men"
}
```

**Response 201**

```json
[...updated list]
```

**Error responses**

```json
{ "message": "invalid or missing fields" }
{ "message": "id must be a positive integer" }
{ "message": "person with this id already exists" }
{ "message": "name must contain only letters and be at least 3 characters" }
{ "message": "age must be a positive integer under 150" }
{ "message": "gender must be male or female" }
{ "message": "type must be kid, men or women" }
```

---

### DELETE /api/persons/:id

Deletes a person by id.

**Response 200**

```json
[...updated list]
```

**Error responses**

```json
{ "message": "invalid id, the id must be a number" }
{ "message": "person not found" }
```

---

## Validation Rules

| Field  | Rules                              |
| ------ | ---------------------------------- |
| id     | positive integer, must be unique   |
| name   | letters only, minimum 3 characters |
| age    | positive integer, maximum 150      |
| gender | male or female                     |
| type   | kid, men or women                  |

---

## CI Pipeline

- runs unit tests
- runs ESLint checks
- ensures code quality before merge

## Git Hooks

Pre-commit hooks via Husky ensure:

- lint rules are respected
- tests pass before every commit
