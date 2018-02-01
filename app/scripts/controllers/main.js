app.controller('MainCtrl', ['$scope', '$http', '$localStorage',function($scope, $http, $localStorage) {
  var vm = this;

  vm.searching = false;
  vm.query = ''; //init search query
  vm.type = ''; // init search result doctype
  vm.search = search; // set search isFunction
  vm.updateVersion = updateVersion //set function for updating version

  init();

  function init() {
    auth();
    $scope.$storage = $localStorage;
    loadVersions()
  }

  function auth() {
    const authResult = JSON.parse(localStorage.authResult || '{}');
    const token = authResult.id_token;
    if (!token && !isLoggedIn(token)) {
      chrome.runtime.sendMessage({
        type: "authenticate"
      });
    }
  }

  function isLoggedIn(token) {
    // The user is logged in if their token isn't expired
    return jwt_decode(token).exp > Date.now() / 1000;
  }

  function logout() {
    // Remove the idToken from storage
    localStorage.clear();
    auth();
  }

  function updateVersion(id) {
    $localStorage.version = id;
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
