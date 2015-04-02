var app = angular.module( 'mainApp', [ 'routerRoutes', 'ngAnimate' ]);

app.controller( 'mainController', function() {
		var vm = this;
		vm.welcomeMsg = 'Welcome to home page';
	})

	// about controller 
	.controller( 'aboutController', function() {

	})

	// work controller
	.controller( 'workController', function() {

	})

	// hobbies controller
	.controller( 'hobbiesController', function() {

	})

	// contact controller 
	.controller( 'contactController', function() {

	});

