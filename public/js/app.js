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
			var gaSvg = new Vivus( 'ga-svg' , {
						type: 'delayed'
						, duration: 75
						, start: 'manual'
					})
					, gaTagSvg = new Vivus( 'ga-tag-svg', {
						type: 'delayed'
						, duration: 75
						, start: 'manual'
					})
					, ebookSvg = new Vivus( 'ebooks-svg', {
						type: 'delayed'
						, duration: 75
						, start: 'manual'
					})
					, airplaneSvg = new Vivus( 'airplane-svg', {
						type: 'delayed'
						, duration: 75
						, start: 'manual'
					})
					, poolSvg = new Vivus( 'pool-svg' , {
						type: 'delayed'
						, duration: 75
						, start: 'manual'
					})
					, heartbeatSvg = new Vivus( 'heartbeat-svg', {
						type: 'delayed'
						, duration: 75
						, start: 'manual'
					})
					, d3Svg = new Vivus( 'd3-svg', {
						type: 'delayed'
						, duration: 75
						, start: 'manual'
					})
					, parallaxSvg = new Vivus( 'parallax-svg', {
						type: 'delayed'
						, duration: 75
						, start: 'manual'
					})
					, davidsSvg = new Vivus( 'davids-svg', {
						type: 'delayed'
						, duration: 75
						, start: 'manual'
					});

			// work page svg
			$(".caption-text").on( 'mouseenter', function() {
				var self = $( this );
				gaSvg.play();
				gaTagSvg.play();
				ebookSvg.play();
				airplaneSvg.play();
				poolSvg.play();
				heartbeatSvg.play();
				d3Svg.play();
				parallaxSvg.play();
				davidsSvg.play();
			}).on( 'mouseleave', function() {
				gaSvg.stop().reset();
				gaTagSvg.stop().reset();
				ebookSvg.stop().reset();
				airplaneSvg.stop().reset();
				poolSvg.stop().reset();
				heartbeatSvg.stop().reset();
				d3Svg.stop().reset();
				parallaxSvg.stop().reset();
				davidsSvg.stop().reset();
			});

	})

	// hobbies controller
	.controller( 'hobbiesController', function() {

	})

	// contact controller 
	.controller( 'contactController', function() {

	})

	// ga controller 
	.controller( 'gaController', function() {

	})

	// ebooks controller  
	.controller( 'ebooksController', function() {

	})

	// byeny controller 
	.controller( 'byenyController', function() {

	})

	// pool party controller
	.controller( 'poolController', function() {

	})

	// heartbeat ink controller
	.controller( 'heartbeatController', function() {

	})

	// davids controller
	.controller( 'davidsController', function() {
		
	});








