const { join } = require('path');
const { createServer } = require('http');
const express = require('express');
// const naked = require('express-naked-redirect');
// const redirect = require('heroku-ssl-redirect');
const corser = require('corser');
// const prerender = require('prerender-node');
// const serveStatic = require('serve-static');
// const compression = require('shrink-ray');

// Configuration constants
const PORT = process.env.PORT || 8080;

// Our lovely express server ❤️
const app = express();

// Redirect to https and naked domain
// if(process.env.NODE_ENV === 'production') {
//     app.use(redirect());
//     app.use(naked({ reverse: true }));
// }

// Cross origin resource sharing
// Just in case people want to link back to our images
// app.use(corser.create());

// Awesome brotli compression with shrink-ray
// app.use(compression());

// Set prerender token to our set env variable
// Intercept search engine crawlers and direct them to prerender
// if(process.env.NODE_ENV === 'production') {
//     prerender.set('prerenderToken', process.env.PRERENDER_TOKEN);
//     app.use(prerender);
// }

// Serve the static folder
app.use(serveStatic(join(__dirname, '..', 'build')));


// Set up catchall route
app.get('*', (req, res) => {
	res.sendFile(join(__dirname, '..', 'build', 'index.html'));
});

// Start up http server
createServer(app).listen(PORT, err => {
	if (err) {
        return console.error(err);
    }
    console.log('Server running on port', PORT)
});
