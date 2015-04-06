var contactSvg = new Vivus( 'contact-svg', {
				type: 'delayed'
				, duration: 190
				, start: 'manual'
			});
$(".box").on('click', function() {
	contactSvg.play();
});