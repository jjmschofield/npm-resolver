# npm-resolver

## Getting Started

```
$ npm install
$ npm start
```

You will find the server running on port 3000 using `nodemodn`.

## Running Tests
For unit tests do:
```
$ npm test:unit
```

For integration tests do:
```
$ npm test:int
```

## Issues
* Should use Docker and or PM2 for production use
* Does not go through a CI pipeline / deploy to a production like env
* Coverage reporting hasn't been added (though is available when using IntelliJ / Webstorm)
* Imported libraries (in lib) are using a non-standard jest mocking technique (need to be updated)
* Imported libraries (in lib) should have more comparable interfaces (need to be updated)
