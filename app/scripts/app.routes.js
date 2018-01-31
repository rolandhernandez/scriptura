app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'MainCtrl',
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
    templateUrl: 'views/passages.html',
    controller: 'PassageCtrl',
    controllerAs: 'ctrl'
  });
});
