# C4C Express Internal Backend

## Motivation

Making this in Express and with MongoDB has a few key benefits that make backend development faster and cleaner

### Benefits

- npm packages help abstract complex behavior and reduce code bloat in this repo
- on the same note, writing in Javascript with npm packages allows you to quickly write more with less. This *entire* backend is just **386** lines of Javascript. For comparsion *just* the apiRouter in the Vertx backend is over **1000** lines of Java. (for a more in depth comparision of the sheer bloat of the Java backend see [bloat.md](bloat.md)) 
- running with node and nodemon means that there is essentially **no** compile time. You are never wasting time waiting to see your changes which was a really annoying issue with the Vertx version.
- Javascript becomes the language for frontend and backend, collaboration could become easier as well as standardizing testing to one Javascript library
- MongoDB/Mongoose has easier to read schemas and is super simple to set up, you dont need to download any local database software just run `npm start` and it will connect to MongoDB Atlas automatically.
- Most importantly, its actually fun to write

### Concerns

- Switching to mongoose means we lose use migrations, which are super helpful for versioning and keeping track of very strict schemas. However if needed we can install an npm package for managing mongoDB migrations.

## [API Documentation](api.md)

## Install

```sh
git clone https://github.com/rymaju/c4c-express-internal-backend.git

npm install
```

If not already done, ask for the `ATLAS_URI` password from me (Ryan Jung), create your own MongoDB cluster on Atlas, or install MongoDB locally.

Create new local SSL certificates with this command:

```sh
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 1000
```
You will be prompted for some information, but the only thing that matters is the passphrase you set. Remember it.

It will then generate two files: cert.pem and key.pem, which are needed for HTTPS. Chrome and other browsers will give a warning when you connect, but it can be ignored.

Create a file named `.env` in the root folder with the URI for your mongoDB connection and the passphrase for the SSL certificate like so:

```
ATLAS_URI=mongodb+srv://backend:<password>@cluster0-bapim.mongodb.net/test?retryWrites=true&w=majority
SSL_PASSPHRASE=password
JWT_SECRET=superdupersecrettoken
HEROKU=false
```

This file will be loaded into `process.env`, so you could also set the `PORT` among other common environment variables in here.

...and youre ready to go!

## Run

```sh
npm run dev
```

or if in production

```sh
npm start
```

The difference is that `npm run dev` uses nodemon to automatically restart the server when changes are detected, very useful for development.

The API will be live at `https://localhost:8443`
