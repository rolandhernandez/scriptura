'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.runtime.onMessage.addListener(function (event) {
  if (event.type === 'authenticate') {

    // scope
    //  - openid if you want an id_token returned
    //  - offline_access if you want a refresh_token returned
    // device
    //  - required if requesting the offline_access scope.
    let options = {
      scope: 'openid offline_access',
      device: 'chrome-extension'
    };

    new Auth0Chrome(config.authDomain, config.authClientId)
    .authenticate(options)
    .then(function (authResult) {
      console.log('auth result', authResult);
      localStorage.authResult = JSON.stringify(authResult);
      chrome.notifications.create({
        type: 'basic',
        iconUrl: '../assets/icon.png',
        title: 'Login Successful',
        message: 'You can use the app now'
      });
    }).catch(function (err) {
      console.log('auth error', authResult);
      chrome.notifications.create({
        type: 'basic',
        title: 'Login Failed',
        message: err.message,
        iconUrl: 'assets/icon.png'
      });
    });
  }
});

// chrome.browserAction.setBadgeText({text: '\'Allo'});

console.log('\'Allo \'Allo! Event Page for Browser Action');
