# Node js SDK for payscribe.ng

This is the nodejs module for payscribe.ng API.
In order to use this module, you'll need a payscribe live api key.

## Support

Any version of nodejs and npm is compatible with this module

### Installing

Install the package using npm:

```
npm install payscribe-sdk
```

## Usage

Its pretty easy to get started:

```
const payscribe = require('payscribe-sdk');

// instantiate with your live key
const Payscribe = new payscribe('API_KEY');

Payscribe.function_name(arg1, arg2)
.then(data => {
console.log(data)
})
.catch(error => {
console.error(error)
})
```

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
