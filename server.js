const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Serve any static files
app.use(express.static(path.join(__dirname, 'build')));
// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

axios.get('https://cdn.seated.com/api/public/v1/artists/ba112bb4-a9d5-4562-8616-5cc9119756d7/tour-events')
.then((response) => {
	console.log(response.data);
	// console.log(response.status);
	// console.log(response.statusText);
	// console.log(response.headers);
	// console.log(response.config);
})
.catch(function (error) {
	// handle error
	console.log(error);
});