app.run(['$localStorage', function($localStorage) {
  //Set Default bible version
  $localStorage.$default({
    version: 'eng-KJV'
  });
}]);
