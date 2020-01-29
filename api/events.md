## `GET /events`

Used for getting a list of public information about all events in the database.

### Authorization Requirements

None.

### Responses

#### `200 OK`

Returns the list of events as a JSON array

```json
[
  {
    "_id": STRING,
    "name": STRING,
    "description": STRING,
    "eventDate": DATE,
    "eventCode": STRING,
    "isOpen": BOOLEAN,
    "imageUrl": STRING,
    "attendees": [USER],
    "createdAt": DATE,
    "updatedAt": DATE,
    "__v": INTEGER
  }
]
```

**DATE** is in the form YYYY-MM-DDTHH:MM:SS.mmmZ, or the result of a Javascript Date object .toJSON()
Example: new Date().toJSON() -> "2020-01-17T03:25:49.315Z"

#### `400 BAD REQUEST`

The request body was malformed according to the specification, the specifics are explained in the response body.

```json
"Error: ERROR"
```

## `GET /events/:id`

Used for getting a single event in the database by ID.

### Authorization Requirements

None.

### Responses

#### `200 OK`

Returns the a JSON object representing an event

```json
{
  "_id": STRING,
  "title": STRING,
  "subtitle": STRING,
  "description": STRING,
  "eventDate": DATE,
  "eventCode": STRING,
  "isOpen": BOOLEAN,
  "imageUrl": STRING,
  "attendees": [USER],
  "createdAt": DATE,
  "updatedAt": DATE,
  "__v": INTEGER
}
```

**DATE** is in the form YYYY-MM-DDTHH:MM:SS.mmmZ, or the result of a Javascript Date object .toJSON()
Example: new Date().toJSON() -> "2020-01-17T03:25:49.315Z"

#### `400 BAD REQUEST`

The request body was malformed according to the specification, the specifics are explained in the response body.

```json
"Error: ERROR"
```

## `POST /events`

Used for creating an event to be stored in the database.

### Authorization Requirements

Requires privilege level 1.

### Request Body

```json
{
  "title": STRING,
  "subtitle": STRING,
  "description": STRING,
  "eventDate": DATE,
  "eventCode": STRING,
  "isOpen": BOOLEAN,
  "imageUrl": STRING
}
```

**DATE** is in the form YYYY-MM-DDTHH:MM:SS.mmmZ, or the result of a Javascript Date object .toJSON()
Example: new Date().toJSON() -> "2020-01-17T03:25:49.315Z"

### Responses

#### `201 OK`

Returns the event posted to the database.

```json
{
  "_id": STRING,
  "title": STRING,
  "subtitle": STRING,
  "description": STRING,
  "eventDate": DATE,
  "eventCode": STRING,
  "isOpen": BOOLEAN,
  "imageUrl": STRING,
  "attendees": [USER],
  "createdAt": DATE,
  "updatedAt": DATE,
  "__v": INTEGER
}
```

#### `400 BAD REQUEST`

The request body was malformed according to the specification, the specifics are explained in the response body.

```json
"Error: ERROR"
```

#### `401 UNAUTHORIZED`

The request does not contain sufficient authorization, the specifics are explained in the response body

```json
"Error: ERROR"
```

## `PUT /events/:id`

Used for updating an event to be stored in the database.

### Authorization Requirements

Requires privilege level 1.

### Request Body

```json
{
  "title": STRING,
  "subtitle": STRING,
  "description": STRING,
  "eventDate": DATE,
  "eventCode": STRING,
  "isOpen": BOOLEAN,
  "imageUrl": STRING
}
```

**DATE** is in the form YYYY-MM-DDTHH:MM:SS.mmmZ, or the result of a Javascript Date object .toJSON()
Example: new Date().toJSON() -> "2020-01-17T03:25:49.315Z"

### Responses

#### `201 OK`

Returns the event updated in database.

```json
{
  "_id": STRING,
  "title": STRING,
  "subtitle": STRING,
  "description": STRING,
  "eventDate": DATE,
  "eventCode": STRING,
  "isOpen": BOOLEAN,
  "imageUrl": STRING,
  "attendees": [USER],
  "createdAt": DATE,
  "updatedAt": DATE,
  "__v": INTEGER
}
```

#### `400 BAD REQUEST`

The request body was malformed according to the specification, the specifics are explained in the response body.

```json
"Error: ERROR"
```

#### `401 UNAUTHORIZED`

The request does not contain sufficient authorization, the specifics are explained in the response body

```json
"Error: ERROR"
```

## `DELETE /events/:id`

Used for deleting a single event in the database by ID.

### Authorization Requirements

None.

### Responses

#### `200 OK`

Returns the event just before it was deleted from the database.

```json
{
  "_id": STRING,
  "title": STRING,
  "subtitle": STRING,
  "description": STRING,
  "eventDate": DATE,
  "eventCode": STRING,
  "isOpen": BOOLEAN,
  "imageUrl": STRING,
  "attendees": [USER],
  "createdAt": DATE,
  "updatedAt": DATE,
  "__v": INTEGER
}
```

#### `400 BAD REQUEST`

The request body was malformed according to the specification, the specifics are explained in the response body.

```json
"Error: ERROR"
```

#### `401 UNAUTHORIZED`

The request does not contain sufficient authorization, the specifics are explained in the response body

```json
"Error: ERROR"
```

## `POST /events/checkin/:code`

Assigns the user associated with the user_id in the JWT to the attendees of the event with the given event code

### Authorization Requirements

Requires privilege level 0.

### Responses

#### `200 OK`

Returns the event with the new attendee in the databse

```json
{
  "_id": STRING,
  "title": STRING,
  "subtitle": STRING,
  "description": STRING,
  "eventDate": DATE,
  "eventCode": STRING,
  "isOpen": BOOLEAN,
  "imageUrl": STRING,
  "attendees": [USER],
  "createdAt": DATE,
  "updatedAt": DATE,
  "__v": INTEGER
}
```

#### `400 BAD REQUEST`

The request body was malformed according to the specification, the specifics are explained in the response body.

```json
"Error: ERROR"
```

#### `401 UNAUTHORIZED`

The request does not contain sufficient authorization, the specifics are explained in the response body

```json
"Error: ERROR"
```
