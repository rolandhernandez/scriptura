app.controller('SettingsCtrl', ['$scope', '$http', '$localStorage', '$state', 'Analytics',function($scope, $http, $localStorage, $state, Analytics) {
  var vm = this;

  vm.searching = false;
  vm.query = ''; //init search query
  vm.type = ''; // init search result doctype
  vm.save = save;
  vm.reset = reset;

  init();

  function init() {
    $scope.$storage = $localStorage;
    vm.fontSize = $localStorage.fontSize;
    vm.lineHeight = $localStorage.lineHeight;
  }

  function save() {

    $localStorage.fontSize = vm.fontSize || 1.2;
    $localStorage.lineHeight = vm.lineHeight || 1.9;

    Analytics.trackEvent('font size', 'changed', $localStorage.fontSize + 'em');
    Analytics.trackEvent('line height', 'changed', $localStorage.fontSize + 'em');

    $state.go('home');
  }

  function reset() {
    $localStorage.fontSize = 1.2;
    $localStorage.lineHeight = 1.9;

    vm.fontSize = 1.2;
    vm.lineHeight = 1.9;
  }

  return vm;
}]);
