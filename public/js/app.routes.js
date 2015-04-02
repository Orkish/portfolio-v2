angular.module( 'routerRoutes', [ 'ngRoute' ])

	.config( function( $routeProvider, $locationProvider ) {
		$routeProvider
		
		// route for index page
		.when( '/index', {
			templateUrl: 'index.html'
			, controller: 'mainController'
			, controllerAs: 'main'
		})

		// route for about page
		.when( '/about', {
			templateUrl: 'views/pages/about.html'
			, controller: 'aboutController'
			, controllerAs: 'about'
		})

		// route for work page
		.when( '/work', {
			templateUrl: 'views/pages/work.html'
			, controller: 'workController'
			, controllerAs: 'work'
		})

		// route for hobbies page
		.when( '/hobbies', {
			templateUrl: 'views/pages/hobbies.html'
			, controller: 'hobbiesController'
			, controllerAs: 'hobbies'
		})

		// route for contact page
		.when( '/contact', {
			templateUrl: 'views/pages/contact.html'
			, controller: 'contactController'
			, controllerAs: 'contact'
		});

	$locationProvider.html5Mode( true );

});