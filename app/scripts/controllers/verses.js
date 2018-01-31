app.controller('VerseCtrl', ['$scope', '$http', '$localStorage', '$stateParams',function($scope, $http, $localStorage, $stateParams) {
  var vm = this;

  vm.loading = false;
  vm.verses = [];

  init();

  function init() {
    vm.bookId = $stateParams.bookId;
    loadVerses();
  }

  function loadVerses() {
    vm.loading = true;
    var query = vm.query;
    var url = 'https://bibles.org/v2/chapters/' + $stateParams.bookId + '.' + $stateParams.chapter + '/verses.js';
    console.log(url);
    $http.get(url)
    .then(function (res) {
      console.log('verses Response:', res);
      vm.verses = res.data.response.verses;
      vm.loading = false;
    });
  }
  return vm;
}]);
