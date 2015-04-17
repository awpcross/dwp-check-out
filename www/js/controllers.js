var app = angular.module('starter.controllers', ['dpd','ngCordova'])

// Sigin issue
.controller('SigninCtrl', function($scope,$state,dpd) {

  console.log('SigninCtrl | start... ') ;


  $scope.signIn = function(signinForm) {
    //if succes, go to Roulette screen
    $state.go('roulette');
  };

    
  console.log('SigninCtrl | done. ') ;
  
})


// Roulette issue
.controller('RouletteCtrl', function($scope,$state,dpd) {


  $scope.getBonuspoints = function() {
    //Calculate the points
    // Id of the bonusTrophy : ZoneBonus . NB : NEVER activate it in the dashbpoard
    var bonusTrophyId =  'a8784f219f97da8a';
    // ToDo : uncomment when signin process is plugged
    //var userid = localStorage.getItem("user_auth_id");
    // ToDo : Comment when signin process is plugged : here is bart id ...
    var userid = '77876edeb634e8af';

    var maximum = 12000;
    var minimum = 3000;
    var bonusPoints = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    
    console.log("RouletteCtrl > getBonuspoints" + bonusPoints);
    //Add BonusPoint - should be done in a service...
    // TODO : add a check if the user has already matched the bonus trophy
    var currentTS = new Date().getTime();
    
    dpd.trophiesmatched.post({ "timestamp" : currentTS, "trophyid":bonusTrophyId,"userid":userid,"points":bonusPoints}).success(function (result) {
            console.log("SETPOINTS : SUCESS" + JSON.stringify(result));
        }).error(function (err) {
           console.log("SETPOINTS : ERROR > " + JSON.stringify(err));
        }).finally(function () {
            console.log("SETPOINTS : FINALLY ");
        });

    dpd.users.get({id:userid}).then( function (response) {
      console.log("User > "+JSON.stringify(response.data));
      var playerScore = response.data.score;
      var newPlayerScore =  playerScore+ bonusPoints;

      dpd.users.put(userid,{"score":newPlayerScore}).success(function (result) {
            console.log("UPDATE GLOBALPOINT : SUCESS" + JSON.stringify(result));
            //Go to bravo screen : todo, if no sucess... go where ?
            $state.go('bravo');
        }).error(function (err) {
           console.log("UPDATE GLOBALPOINT : ERROR > " + JSON.stringify(err));
        }).finally(function () {
            console.log("UPDATE GLOBALPOINT : FINALLY ");
        });


    });


  };
  

  console.log('RouletteCtrl | start... ') ;
    
  console.log('RouletteCtrl | done. ') ;



  
})


// Bravo issue
.controller('BravoCtrl', function($scope,dpd) {

  console.log('BravoCtrl | start... ') ;
  // TODO : prevoir un signout automatique
    
  console.log('BravoCtrl | done. ') ;
  
})