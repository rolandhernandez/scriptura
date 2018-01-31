app.config(function($httpProvider) {
  $httpProvider.defaults.headers.common['Authorization'] = 'Basic ' + btoa(config.apiKey + ':X');
});
