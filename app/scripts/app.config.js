app.config(function($httpProvider) {
  //Inject API in Auth Headers for api calls
  $httpProvider.defaults.headers.common['Authorization'] = 'Basic ' + btoa(config.apiKey + ':X');
});
