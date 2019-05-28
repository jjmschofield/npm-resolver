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
* Validation and error checking is a bit lack luster
* More testing is required on Semver resolution - it is possible that nulls may be returned
* The process is concurrent - but that concurrency is not fully under control
* A very simply in memory cache is provided - it is possible it will consume a large amount of machine resources (especially if the client is not allowed to be GCed)
* Some technical debt has been gained in the form of some skipped tests - these can be covered by higher level tests (eg integration tests) and manual testing until resolved
* Only production dependents are considered, dev dependencies are not handled
* Peer dependencies are not handled
* No explicit performance tests are provided
* Private repos are handled by returning an error code on the model, however a check is not performed to confirm that a 401 resulted from a private repo (rather then a bad npm response)
* Requests are not retried
* We do not persist a cache of resolutions - eg a cache to disk or memeory persistent between calls could be used to optimize subsequent resolutions on a package (with a suitable TTL)
