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
		})

		// route for ga page
		.when( '/ga', {
			templateUrl: 'views/pages/ga.html'
			, controller: 'gaController'
			, controllerAs: 'ga'
		})

		// route for ebooks page
		.when( '/ebooks', {
			templateUrl: 'views/pages/ebooks.html'
			, controller: 'ebooksController'
			, controllerAs: 'ebooks'
		})

		// routes for byeny page
		.when( '/byeny', {
			templateUrl: 'views/pages/byeny.html'
			, controller: 'byenyController'
			, controllerAs: 'byeny'
		})

		// routes for pool party page
		.when( '/pool', {
			templateUrl: 'views/pages/pool.html'
			, controller: 'poolController'
			, controllerAs: 'pool'
		})

		// routes for heartbeat ink page
		.when( '/heartbeat', {
			templateUrl: '/views/pages/heartbeat.html'
			, controller: 'heartbeatController'
			, controllerAs: 'heartbeat'
		})

		// routes for davids page
		.when( '/davids', {
			templateUrl: 'views/pages/davids.html'
			, controller: 'davidsController'
			, controllerAs: 'davids'
		});

	$locationProvider.html5Mode( true );

});





