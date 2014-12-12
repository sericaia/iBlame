angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Friends) {
	$scope.user = Friends.getLoggedUserData();
	$scope.friendBlames = Friends.getUserBlames($scope.user.id);
})

.controller('FriendsCtrl', function($scope, Friends) {
	$scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
	$scope.friend = Friends.get($stateParams.friendId);
	$scope.friendBlames = Friends.getUserBlames($stateParams.friendId);
	
		
	$scope.reblame = function(blameId){
		var result = Friends.reblame(blameId);	//TODO: show dialog "added!"
		console.log("reblame: " + result);		
	}
})

.controller('AccountCtrl', function($scope) {
})

.controller('BlameCtrl', function($scope, Friends) {
	
	$scope.blamePerson = function(){
	
		Friends.addBlamedPerson($scope.username, $scope.reason, $scope.anonymous).then(function(results) {
			//TODO: show dialog "added!"
		});
	}
	
});
