var app = angular.module( 'mainApp', [ 'routerRoutes', 'ngAnimate' ]);

app.controller( 'mainController', function() {
	var vm = this;
	vm.welcomeMsg = 'Welcome to home page';
});

