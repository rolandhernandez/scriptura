app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/dashboard');
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'ctrl'
  })
  .state('home', {
    url: '/dashboard',
    templateUrl: 'views/home.html',
    controller: 'MainCtrl',
    controllerAs: 'ctrl'
  })
  .state('settings', {
    url: '/settings',
    templateUrl: 'views/settings.html',
    controller: 'SettingsCtrl',
    controllerAs: 'ctrl'
  })
  .state('books', {
    url: '/books',
    templateUrl: 'views/books.html',
    controller: 'BookCtrl',
    controllerAs: 'ctrl'
  })
  .state('chapters', {
    url: '/:bookId/chapters',
    templateUrl: 'views/chapters.html',
    controller: 'ChapterCtrl',
    controllerAs: 'ctrl'
  })
  .state('verses', {
    url: '/:bookId/:chapter/verses',
    templateUrl: 'views/verses.html',
    controller: 'VerseCtrl',
    controllerAs: 'ctrl'
  })
  .state('passage', {
    url: '/passage/:reference',
    params: { verse: null },
    templateUrl: 'views/passages.html',
    controller: 'PassageCtrl',
    controllerAs: 'ctrl'
  });
});
