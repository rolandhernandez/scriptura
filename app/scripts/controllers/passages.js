app.controller('PassageCtrl', ['$scope', '$http', '$localStorage', '$stateParams',function($scope, $http, $localStorage, $stateParams) {
  var vm = this;

  vm.loading = false;

  init();

  function init() {
    loadPassage();
  }

  function loadPassage() {
    vm.loading = true;
    var url = 'https://bibles.org/v2/passages.js?q[]=' + $stateParams.reference + '&version=' + $localStorage.version;
    console.log(url);
    $http.get(url)
    .then(function (res) {
      console.log('Passage Response:', res);
      vm.passage = res.data.response.search.result.passages[0];
      vm.loading = false;
    });
  }
  return vm;
}]);
