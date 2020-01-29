Analysis was done by counting literal lines of code in both repos. Yes lines of code are not exactly an accurate measurment of complexity or ease of reading, but as a general rule the more lines of code the less expressive.

## Results

1. Express - 490 lines of Javascript

2. Java Internal Backend - 2050 lines of Java

3. Java Backend Scaffold - 2390 lines of Java

Express has the same functionality as the Java Internal Backend, but with 1560 less lines of code, 418% less code (or 24% as much code as the Java version)

### Express Internal Backend .js lines of code:

```sh
    39 middleware/auth.js
    25 models/event.model.js
    21 models/news.model.js
    38 models/user.model.js
   102 routes/events.js
    88 routes/login.js
    71 routes/news.js
    28 routes/users.js
    78 server.js
  490 total
```

### Java Internal Backend .java lines of code:

```sh
    69 api/src/main/java/com/codeforcommunity/ApiMain.java
    16 api/src/main/java/com/codeforcommunity/JacksonMapper.java
    70 api/src/main/java/com/codeforcommunity/api/IProcessor.java
    53 api/src/main/java/com/codeforcommunity/dto/ApplicantReturn.java
    64 api/src/main/java/com/codeforcommunity/dto/EventReturn.java
    59 api/src/main/java/com/codeforcommunity/dto/NewsReturn.java
    57 api/src/main/java/com/codeforcommunity/dto/UserReturn.java
  1127 api/src/main/java/com/codeforcommunity/rest/ApiRouter.java
    66 api/src/main/java/com/codeforcommunity/util/UpdatableBCrypt.java
    77 service/src/main/java/com/codeforcommunity/ServiceMain.java
   392 service/src/main/java/com/codeforcommunity/processor/ProcessorImpl.java
  2050 total
```

### Java Backend Scaffold .java lines of code

```sh
    30 api/src/main/java/com/codeforcommunity/ApiMain.java
    39 api/src/main/java/com/codeforcommunity/api/IAuthProcessor.java
    18 api/src/main/java/com/codeforcommunity/api/INotesProcessor.java
    27 api/src/main/java/com/codeforcommunity/dto/ClientErrorResponse.java
    11 api/src/main/java/com/codeforcommunity/dto/IDTO.java
    27 api/src/main/java/com/codeforcommunity/dto/ServerErrorResponse.java
    23 api/src/main/java/com/codeforcommunity/dto/SessionResponse.java
    25 api/src/main/java/com/codeforcommunity/dto/auth/LoginRequest.java
    15 api/src/main/java/com/codeforcommunity/dto/auth/NewSessionRequest.java
    52 api/src/main/java/com/codeforcommunity/dto/auth/NewUserRequest.java
    18 api/src/main/java/com/codeforcommunity/dto/auth/RefreshSessionRequest.java
    16 api/src/main/java/com/codeforcommunity/dto/auth/RefreshSessionResponse.java
    29 api/src/main/java/com/codeforcommunity/dto/notes/ContentNote.java
    49 api/src/main/java/com/codeforcommunity/dto/notes/FullNote.java
    20 api/src/main/java/com/codeforcommunity/dto/notes/NoteRequest.java
    30 api/src/main/java/com/codeforcommunity/dto/notes/NoteResponse.java
    21 api/src/main/java/com/codeforcommunity/dto/notes/NotesRequest.java
    32 api/src/main/java/com/codeforcommunity/dto/notes/NotesResponse.java
     8 api/src/main/java/com/codeforcommunity/exceptions/AuthException.java
     4 api/src/main/java/com/codeforcommunity/exceptions/MissingRequestBodyException.java
     4 api/src/main/java/com/codeforcommunity/exceptions/RequestBodyMappingException.java
    81 api/src/main/java/com/codeforcommunity/rest/ApiRouter.java
    16 api/src/main/java/com/codeforcommunity/rest/HttpConstants.java
     9 api/src/main/java/com/codeforcommunity/rest/IRouter.java
    91 api/src/main/java/com/codeforcommunity/rest/subrouter/AuthRouter.java
    69 api/src/main/java/com/codeforcommunity/rest/subrouter/CommonRouter.java
   109 api/src/main/java/com/codeforcommunity/rest/subrouter/NotesRouter.java
    48 common/src/main/java/com/codeforcommunity/auth/AuthUtils.java
    14 common/src/main/java/com/codeforcommunity/auth/IAuthDatabase.java
    14 common/src/main/java/com/codeforcommunity/auth/JWTAuthorizer.java
    19 common/src/main/java/com/codeforcommunity/auth/JWTCreator.java
    80 common/src/main/java/com/codeforcommunity/auth/JWTHandler.java
    76 common/src/main/java/com/codeforcommunity/email/Emailer.java
    15 common/src/main/java/com/codeforcommunity/logger/Logger.java
    27 common/src/main/java/com/codeforcommunity/propertiesLoader/PropertiesLoader.java
    78 service/src/main/java/com/codeforcommunity/ServiceMain.java
    63 service/src/main/java/com/codeforcommunity/processor/AuthDatabase.java
    93 service/src/main/java/com/codeforcommunity/processor/AuthProcessorImpl.java
    78 service/src/main/java/com/codeforcommunity/processor/NotesProcessorImpl.java
   418 service/src/test/java/com.codeforcommunity/JooqMock.java
   318 service/src/test/java/com.codeforcommunity/processor/ProcessorImplTest.java
   176 service/test/AuthorizationProcessorImplTest.java
  2390 total
```
