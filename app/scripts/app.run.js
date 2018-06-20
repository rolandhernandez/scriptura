app.run(['$localStorage', 'Analytics', '$transitions', function($localStorage, Analytics, $transitions) {
  //Set Default bible version
  $localStorage.$default({
    version: 'eng-KJV',
    fontSize: 1.2,
    lineHeight: 1.9,
    versionAbbr: 'KJV'
  });

  $transitions.onSuccess({}, function(trans) {
    console.log("statechange success");
    console.log(trans.to());
    Analytics.trackPage(trans.to().url, trans.to().name);
  });
}]);
