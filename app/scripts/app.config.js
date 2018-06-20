app.config(function($httpProvider, AnalyticsProvider) {

  AnalyticsProvider
  .setAccount('UA-100399027-2')
  .logAllCalls(true)
  .trackPages(false)
  .trackUrlParams(true)
  .setPageEvent('$stateChangeSuccess');

  //Inject API in Auth Headers for api calls
  $httpProvider.defaults.headers.common['Authorization'] = 'Basic ' + btoa(config.apiKey + ':X');
});
