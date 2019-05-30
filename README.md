# npm-resolver
An `express` application capable of resolving the entire dependency tree for a given package and version number over a Restful HTTP/JSON API.

## Getting Started

```
$ npm install
$ npm start
```

You will find the server running on HTTP at port 3000 using `nodemodn`.

## Resolving a package
### GET /resolve/:name
A GET HTTP endpoint is available:
``` 
http://localhost:3000/resolve/<package name>?version=<optional semver version or tag>
```
If a version is not given, the `latest` tag will be assumed.

For example:
```
$ curl http://localhost:3000/resolve/axios?version=0.18.0
{
  "packages": [
    {
      "name": "axios",
      "version": "0.18.0",
      "id": "axios#0.18.0",
      "dependencies": [
        "follow-redirects#1.7.0",
        "is-buffer#1.1.6"
      ],
      "error": null
    },
    {
      "name": "follow-redirects",
      "version": "1.7.0",
      "id": "follow-redirects#1.7.0",
      "dependencies": [
        "debug#3.2.6"
      ],
      "error": null
    },
    {
      "name": "is-buffer",
      "version": "1.1.6",
      "id": "is-buffer#1.1.6",
      "dependencies": [],
      "error": null
    },
    {
      "name": "debug",
      "version": "3.2.6",
      "id": "debug#3.2.6",
      "dependencies": [
        "ms#2.1.1"
      ],
      "error": null
    },
    {
      "name": "ms",
      "version": "2.1.1",
      "id": "ms#2.1.1",
      "dependencies": [],
      "error": null
    }
  ]
}
```
Packages are returned in a flat array to reduce the payload of the response where multiple packages might reference the same dependency. 

Packages are given an ID of `<name>#<resolved version number>` so it is fairly trivial to produce a hierarchy.

In the situation where a package request fails, the request will not be retried and the status code of the request will be added to the package in the `error` field. Dependencies will be empty in this scenario.

If you are interested in how this works, most of the interesting bits can be found in [NpmClient](src/routes/resolve/lib/NpmClient.js) and [Resolver](src/routes/resolve/lib/Resolver.js)

### UI
A very basic UI is provided at http://localhost:3000 which can be used to retrieve package dependencies for the latest version.

## Running Tests
For unit tests do:
```
$ npm test:unit
```

For integration tests do:
```
$ npm test:int
```

## Issues and Limitations  
### Correctness
* Error checking is very lack luster
  * We basically just catch the exception and swallow it to prevent sensitive information returning to the caller
  * Some more thought is probably required to provide suitable traces and to attempt to recover (eg failed NPM API requests)
* The process is concurrent - but that concurrency is not fully under control
  * Packages with many dependencies will exponentially create many calls to retrieve package information and to resolve package versions
* A very simple in memory cache is provided 
  * It is likely it will consume a large amount of machine resources, especially if the service itself receives concurrent requests
* Only production dependencies are considered, dev dependencies are not handled
* Peer dependencies are not handled
* Private repos are handled by returning an error code on the model, however a check is not performed to confirm that a 401 resulted from a private repo (rather then a bad npm response)
  * Alternatively this blog post is a bit of a smoking gun https://blog.npmjs.org/post/180599338975/401-scoped-packages
  * After checking with @babel/core this is definitely the case... it seems that all scoped packages may require an auth token of some description...
* Tags and Pre-release versions may need to be handled
  * These haven't been explicitly tested or accommodated so there could be a lurking resolution issue
* Hash separator for id's is probably not safe
  * The hash separator used to split package names and versions hasn't been explicitly checked / tested
  * It is likely that @ would be a better choice - however this would require a bit better handling of scoped packages (which include @ in the name) 

### Technical Debt
* Key classes (NpmClient and Resolver) are not covered by unit tests
  * They are protected from regression by higher order (integration) tests however there may well be lurking nasties and feedback cycles are increased by relying on longer running tests
* Does not go through a CI pipeline / deploy to a production like env
  * In a world where we are doing releases, this lowers our confidence of deployments making them more costly and error prone - delaying how long it takes us to deliver value
* Coverage reporting hasn't been added (though is available when using IntelliJ / Webstorm)
* The project is bootstrapped by work from a previous project to provide common functionality
  * Provides a quick and easy to use express app with a logger suitable for a microservices environment (standardised, correlation id's, multi-transport)
  * That said it could do with some work
    * relies on Winston 2.x
    * uses a non-standard jest mocking technique
    * should have more comparable interfaces
* Resolver class could be more functional
  * There is a lot of mutation of `this` members

### Security
* The service does not use HTTPS
* Validation is almost non existent
  * Input validation is very scant on the resolve endpoint
  * In the current implementation this isn't the end of the world, but with more stringent validation (inline with NPM's rules for package names, versions and tags) further extensions can be defended  
* Responses from NPM are not validated 
  * Is there a vector to execute an XSS as NPM is a public repository? Maybe NPM's validation is good enough... but the question isn't answered!

### Operability
* Should use Docker and PM2 for production use
  * This will grant portability and a high quality process manager
* Error handling and logging is overall very poorly implemented
  * Improving this would provide for far faster root cause analysis and issue detection 

### Performance
* No explicit performance tests are provided
  * This prevents our ability to degredations based on change sets
* We do not persist a cache of resolutions
  * A cache to disk or memory persistent between calls could be used to optimize subsequent resolutions on a package (with a suitable TTL)
