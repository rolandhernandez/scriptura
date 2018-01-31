app.controller('ChapterCtrl', ['$scope', '$http', '$localStorage', '$stateParams',function($scope, $http, $localStorage, $stateParams) {
  var vm = this;

  vm.loading = false;
  vm.chapters = [];

  init();

  function init() {
    vm.bookId = $stateParams.bookId;
    loadChapters();
  }

  function loadChapters() {
    vm.loading = true;
    var query = vm.query;
    var url = 'https://bibles.org/v2/books/' + $stateParams.bookId + '/chapters.js';
    console.log(url);
    $http.get(url)
    .then(function (res) {
      console.log('Chapter Response:', res);
      vm.chapters = res.data.response.chapters;
      vm.loading = false;
    });
  }
  return vm;
}]);
