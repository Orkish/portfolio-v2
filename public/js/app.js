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
						, duration: 100
						, start: 'manual'
					})
					, gaTagSvg = new Vivus( 'ga-tag-svg', {
						type: 'delayed'
						, duration: 90
						, start: 'manual'
					})
					, ebookSvg = new Vivus( 'ebooks-svg', {
						type: 'delayed'
						, duration: 90
						, start: 'manual'
					})
					, airplaneSvg = new Vivus( 'airplane-svg', {
						type: 'delayed'
						, duration: 90
						, start: 'manual'
					})
					, poolSvg = new Vivus( 'pool-svg' , {
						type: 'delayed'
						, duration: 90
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
			}).on( 'mouseleave', function() {
				gaSvg.stop().reset();
				gaTagSvg.stop().reset();
				ebookSvg.stop().reset();
				airplaneSvg.stop().reset();
				poolSvg.stop().reset();
			});

	})

	// hobbies controller
	.controller( 'hobbiesController', function() {

	})

	// contact controller 
	.controller( 'contactController', function() {

	});

