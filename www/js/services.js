angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
	// Might use a resource here that returns a JSON array

	// Some fake testing data
	var friends = [
		{ id: 0, username: 'dege', name: 'Diogo Gil', blameNumber: 60, img: '../img/dege.jpg'},
		{ id: 1, username: 'raposo', name: 'Francisco Raposo' , blameNumber: 1, img: '../img/raposo.jpg'},
		{ id: 2, username: 'campelo', name: 'Francisco Campelo' , blameNumber: 1, img: '../img/defaultuser.jpg'},
		{ id: 3, username: 'gads', name: 'Guilherme Santos' , blameNumber: 1, img: '../img/gads.jpg'},
		{ id: 4, username: 'joao', name: 'João Santos' , blameNumber: 1, img: '../img/defaultuser.jpg'},
		{ id: 5, username: 'sericaia', name: 'Daniela Borges' , blameNumber: 1, img: '../img/defaultuser.jpg'}
	];

	var blames = [
		{ id: 0, blamedUserId: 1, blameOwnerId: 5, createdAt: new Date(), reason: "brought lunch in a inapropriate day", blamersList: [2, 3, 4]},
		{ id: 1, blamedUserId: 1, blameOwnerId: 5, createdAt: new Date(), reason: "does not camel case letters in code", blamersList: [2]},
		{ id: 2, blamedUserId: 0, blameOwnerId: 3, createdAt: new Date(), reason: "presented old content to zpx chat", blamersList: [0, 5]},
		{ id: 3, blamedUserId: 5, blameOwnerId: 4, createdAt: new Date(), reason: "xpto", blamersList: [0, 3, 1]}
	];

	var loggedUserId = 5;

	//aux
	Array.prototype.contains = function(k) {
		for(var i=0; i < this.length; i++){
			if(this[i] == k){
				return true;
			}
		}
		return false;
	}


	return {
		all: function() {
			return friends;
		},
		get: function(friendId) {
			// Simple index lookup
			return friends[friendId];
		},
		getUserBlames: function(userId) {

			var iUserId = parseInt(userId);

			var userBlames = [];

			for (var i = 0; i < blames.length; i++){
				var blame = blames[i];
				if(blame.blamedUserId == iUserId){
					
					//change blame data to return owner info too
					blame.blameOwner = friends[blame.blameOwnerId];
										
					//add to list
					userBlames.push(blame);
				}
			}			
			return userBlames;
		},
		getLoggedUserData: function() {			
			return friends[loggedUserId];
		},
		reblame: function(blameId){
			var blame = blames[blameId];
			if(!blame.blamersList.contains(loggedUserId)){
				blame.blamersList.push(loggedUserId);
				return true;
			}
			return false;
		}

	}
});