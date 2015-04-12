var express = require( 'express' )
		,app = express()
		,path = require( 'path' );

// set up public folder to serve public assets
app.use( express.static( __dirname + '/public' ));

// set up one route to index.html file 
app.get( '*', function( req, res ) {
	res.sendFile( path.join( __dirname + '/public/index.html' ));
});

// starting the server 8080
// app.listen(1337, "104.236.48.67");
// console.log( 'Magical shit happening on 1337' );