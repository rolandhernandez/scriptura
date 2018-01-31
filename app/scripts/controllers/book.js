app.controller('BookCtrl', ['$scope', '$http', '$localStorage',function($scope, $http, $localStorage) {
  var vm = this;

  vm.loading = false;
  vm.books = [];

  init();

  function init() {
    loadBooks();
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
  return vm;
}]);
