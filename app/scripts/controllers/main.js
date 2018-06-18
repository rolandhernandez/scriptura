app.controller('MainCtrl', ['$scope', '$http', '$localStorage', '$state',function($scope, $http, $localStorage, $state) {
  var vm = this;

  vm.searching = false;
  vm.query = ''; //init search query
  vm.type = ''; // init search result doctype
  vm.search = search; // set search isFunction
  vm.updateVersion = updateVersion //set function for updating version
  vm.loadChapters = loadChapters;
  vm.loadPassage = loadPassage;
  vm.book = true;
  vm.books = [];
  vm.setBookStep = setBookStep;

  init();

  function init() {
    auth();
    $scope.$storage = $localStorage;
    loadVersions();
    loadBooks();
    vm.scrollbar = {
      autoHideScrollbar: true,
      theme: 'light',
      advanced:{
        updateOnContentResize: true
      },
      axis: 'y',
      mouseWheel:{ enable: true },
      setHeight: 300,
      scrollInertia: 400
    };

    vm.passageScrollbar = {
      autoHideScrollbar: true,
      theme: 'light',
      advanced:{
        updateOnContentResize: true
      },
      axis: 'y',
      mouseWheel:{ enable: true },
      setHeight: 800,
      scrollInertia: 400
    };
  }

  function auth() {
    const authResult = JSON.parse(localStorage.authResult || '{}');
    const token = authResult.id_token;
    if (!token && !isLoggedIn(token)) {
      // chrome.runtime.sendMessage({
      //   type: "authenticate"
      // });
      $state.go('login');
    }
  }

  function isLoggedIn(token) {
    if(token) {
      return jwt_decode(token).exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  function logout() {
    // Remove the idToken from storage
    localStorage.clear();
    auth();
  }

  function updateVersion(version) {
    $localStorage.version = version.id;
    $localStorage.versionAbbr = version.abbreviation;
    console.log('updated version', $localStorage);
  }

  function loadVersions () {
    vm.loading = true;
    var url = 'https://bibles.org/v2/versions.js?language=eng-US';
    $http.get(url)
    .then(function (res) {
      console.log('Version Response:', res);
      vm.versions = res.data.response.versions;
      vm.loading = false;
    });
  }

  function loadBooks() {
    vm.loading = true;
    var query = vm.query;
    var url = 'https://bibles.org/v2/versions/' + $localStorage.version + '/books.js';
    console.log(url);
    $http.get(url)
    .then(function (res) {
      console.log('Book Response:', res);
      vm.books = res.data.response.books;
      vm.loading = false;
    });
  }

  function setBookStep() {
    vm.book = true;
    vm.chapter = false;
  }

  function loadChapters(id) {
    vm.book = false;
    vm.chapter = true;
    vm.loading = true;
    var query = vm.query;
    var url = 'https://bibles.org/v2/books/' + id + '/chapters.js';
    console.log(url);
    $http.get(url)
    .then(function (res) {
      console.log('Chapter Response:', res);
      vm.chapters = res.data.response.chapters;
      vm.loading = false;
    });
  }

  function loadPassage(chapter) {
    vm.book = false;
    vm.chapter = false;
    vm.passage = true;
    vm.loading = true;
    var url = 'https://bibles.org/v2/passages.js?q[]=' + vm.bookName + '+' + chapter + '&version=' + $localStorage.version;
    console.log(url);
    $http.get(url)
    .then(function (res) {
      console.log('Passage Response:', res);
      vm.passageText = res.data.response.search.result.passages[0];
      vm.loading = false;
    });
  }

  function search() {
    vm.searchResults = undefined; //reset searchResults if already populated
    vm.searching = true;
    var query = vm.query;
    var url = 'https://bibles.org/v2/search.js?query=' + query + '&version=' + $localStorage.version;
    $http.get(url)
    .then(function (res) {
      console.log('Response:', res);
      var type = res.data.response.search.result.type;
      switch(type) {
        case 'verses':
        vm.searchResults = res.data.response.search.result.verses;
        break;
        case 'passages':
        vm.searchResults = res.data.response.search.result.passages;
        break;
        default:
        vm.searchResults = undefined;
        break;
      };
      vm.type = type;
      vm.searching = false;
    });
  }
  return vm;
}]);
