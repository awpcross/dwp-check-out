// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])


.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);}
    // org.apache.cordova.statusbar required
    if (window.StatusBar) { StatusBar.styleLightContent(); }
    
  });


})

.config(function($stateProvider, $urlRouterProvider) {

   $stateProvider
    
    .state('signin', {
      url: '/signin',
      templateUrl: 'templates/signin.html',
      controller: 'SigninCtrl'
    })
    
    .state('roulette', {
      url: '/roulette',
      templateUrl: 'templates/roulette.html',
      controller: 'RouletteCtrl'
    })
    
    .state('bravo', {
      url: '/bravo',
      templateUrl: 'templates/bravo.html',
      controller: 'BravoCtrl'
    })
    ;

  $urlRouterProvider.otherwise('/signin');
});


app.value('dpdConfig', { 
    collections: ['users', 'trophies', 'trophiesmatched', 'newsecom'], 
    //serverRoot: 'http://localhost:2403/', // optional, defaults to same server
    serverRoot: 'https://digitalwatchproject.cross-systems.ch/', // optional, defaults to same server
    socketOptions: { reconnectionDelayMax: 3000 }, // optional socket io additional configuration
    useSocketIo: false, // optional, defaults to false
    noCache: true // optional, defaults to false (false means that caching is enabled, true means it disabled)
});