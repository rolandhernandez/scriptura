# Scriptura

Scriptura is a free bible app for the Chrome Browser that allows users to easy access scripture.

## Getting Started

Before you get started, you will need to sign up for a few different services.

### Prerequisites

What things you need to install the software and how to install them

```
1. Signup for the Bibles.org API here: http://bibles.org/pages/api
2. Signup for the Auth0 Platform here: https://auth0.com/
```

### Installing

A step by step series of examples that tell you how to get a development env running

Install Bower Dependencies

```
bower install
```

Create your config file using [config.example.js](config.example.js). Note: Should be named __config.production.js__ and placed in __app/scripts__ folder.

```
var config = {
  apiKey: 'API-KEY-HERE', // This is from Bibles.org API
  authClientId: 'CLIENT-ID', // Client ID from Auth0
  authDomain: 'YOUR-SITE.auth0.com' // Domain for Auth0 app
}
```

## Deployment

To deploy to your browser for development and testing.

1. Type **chrome://extensions** in your browser
2. Click **Load Unpacked extension**
3. Select **app** folder which contains the **manifest.json**

## Built With

* [Angular.js](https://github.com/angular/angular.js) - The web framework used
* [Metronic 5](https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469) - UI Design
* [Auth0 Chrome](https://github.com/auth0-community/auth0-chrome) - User Authentication
* [Bibles.org](http://bibles.org/pages/api) - Bible Search API

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us. Coming Soon...

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Roland Saenz** - *Initial work* - [RolandSaenz](https://github.com/rolandsaenz)

See also the list of [contributors](https://github.com/rolandsaenz/scriptura/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Jesus Christ
