var contactSvg = new Vivus( 'contact-svg', {
				type: 'delayed'
				, duration: 90
				, start: 'manual'
			});
$(".box").on('click', function() {
	contactSvg.play();
});