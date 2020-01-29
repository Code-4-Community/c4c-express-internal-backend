## `POST /signup`

Used for creating a user to be stored in the database.

### Authorization Requirements

None.

### Request Body

```json
{
  "email": STRING,
  "firstName": STRING,
  "lastName": STRING,
  "password": STRING,
  "currentYear": INTEGER,
  "major": STRING
}
```

### Responses

#### `201 OK`

User was successfully added to the database.

#### `400 BAD REQUEST`

The request body was malformed according to the specification, the specifics are explained in the response body.

```json
"Error: ERROR"
```

## `POST /login`

Used for creating a user to be stored in the database.

### Authorization Requirements

None.

### Request Body

```json
{
  "email": STRING,
  "password": STRING
}
```

### Responses

#### `201 OK`

Returns a JWT in response header under "Authorization" as "Bearer [token]" and response body as jwt: [token] that expires in 60 minutes.

```json
token: STRING
```

#### `400 BAD REQUEST`

The request body was malformed according to the specification, the specifics are explained in the response body.

## `POST /logout`

Used for logging out a user, invalidating the given JWT.

### Authorization Requirements

Requires privilege level 1.

### Responses

#### `201 OK`

User logged out successfully.

#### `400 BAD REQUEST`

The request body was malformed according to the specification, the specifics are explained in the response body.


#### `401 UNAUTHORIZED`

The request does not contain sufficient authorization, the specifics are explained in the response body


## `GET /users`

Used for getting a list of public information about all users in the database.

### Authorization Requirements

None.

### Responses

#### `200 OK`

Returns the list of users as a JSON array

```json
[
  {
    "_id": STRING,
    "email": STRING,
    "firstName": STRING,
    "lastName": STRING,
    "currentYear": INTEGER,
    "major": STRING
  }
]
```

#### `400 BAD REQUEST`

The request body was malformed according to the specification, the specifics are explained in the response body.

```json
"Error: ERROR"
```

## `GET /users/:id`

Used for getting public information about a single users in the database by ID.

### Authorization Requirements

None.

### Responses

#### `200 OK`

Returns the a JSON object representing a user

```json
{
  "_id": STRING,
  "email": STRING,
  "firstName": STRING,
  "lastName": STRING,
  "currentYear": INTEGER,
  "major": STRING
}
```

#### `400 BAD REQUEST`

The request body was malformed according to the specification, the specifics are explained in the response body.

```json
"Error: ERROR"
```
