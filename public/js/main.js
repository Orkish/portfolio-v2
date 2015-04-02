(function() {

	// using Vivus library to animate svg 
	var aboutSvg = new Vivus( 'about-svg', {
				type: 'delayed'
				, duration: 200
				, start: 'manual'
			})
			, workSvg = new Vivus( 'work-svg' , {
					type: 'delayed'
					, duration: 65
					,start: 'manual'
			})
			, hobbiesSvg = new Vivus( 'hobbies-svg', {
				type: 'delayed'
				, duration: 65
				, start: 'manual'
			})
			, contactSvg = new Vivus( 'contact-svg', {
				type: 'delayed'
				, duration: 65
				, start: 'manual'
			});

	// handling vivus for index page
	$('.nav-btn').on( 'mouseenter', function() {
		var self = $(this)
				, selfId = self[0].id;
		console.log( selfId );
		switch( selfId ) {
			case "about-btn":
				aboutSvg.play();
				break;
			case "work-btn":
				workSvg.play();
				break;
			case "hobbies-btn":
				hobbiesSvg.play();
				break;
			case "contact-btn":
				contactSvg.play();
				break;
		}
	}).on( 'mouseleave', function() {
		aboutSvg.stop().reset();
		workSvg.stop().reset();
		hobbiesSvg.stop().reset();
		contactSvg.stop().reset();
	});

	// animate.css listener
	$('.name-header').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		$('.nav-sec').addClass( 'show animated zoomIn' ); 
	});






})();