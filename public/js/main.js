$( window ).load( function(){

	(function() {

		$('body').addClass( 'loaded' );
		$('.nav-sec' ).addClass( 'show animated zoomIn' );

	// creating Vivus svg elements 
	var aboutSvg = new Vivus( 'about-svg', {
				type: 'delayed'
				, duration: 150
				, start: 'manual'
			})
			, workSvg = new Vivus( 'work-svg' , {
					type: 'delayed'
					, duration: 45
					,start: 'manual'
			})
			// , hobbiesSvg = new Vivus( 'hobbies-svg', {
			// 	type: 'delayed'
			// 	, duration: 45
			// 	, start: 'manual'
			// })	
			, contactSvg = new Vivus( 'contact-svg', {
				type: 'delayed'
				, duration: 45
				, start: 'manual'
			});

	// handling vivus for index page
	$('.nav-btn').on( 'mouseenter', function() {
		var self = $( this )
				, selfId = self[0].id;
		// console.log( selfId );
		switch( selfId ) {
			case "about-btn":
				aboutSvg.play();
				break;
			case "work-btn":
				workSvg.play();
				break;
			// case "hobbies-btn":
			// 	hobbiesSvg.play();
			// 	break;
			case "contact-btn":
				contactSvg.play();
				break;
		}
	}).on( 'mouseleave', function() {
		aboutSvg.stop().reset();
		workSvg.stop().reset();
		// hobbiesSvg.stop().reset();
		contactSvg.stop().reset();
	});

	// animate.css listener
	// $('.name-header').one( 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
	// 	console.log('header done loading');
	// 	$('.nav-sec' ).addClass( 'show animated zoomIn' ); 
	// });

	// show nav bar when button is pressed

	var topNav = $("nav.top-bar")
			, btmNavBtn = $(".nav-btn")
			, homeBtn = $(".home-btn")
			, trigger = $(".trigger").length;

	$(btmNavBtn).on( 'click', function() {
		topNav.fadeIn( 2000 );
	});
	$(homeBtn).on( 'click' , function() {
		topNav.fadeOut( 500 );
	});




})();

});