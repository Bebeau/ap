const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Serve any static files
app.use(express.static(path.join(__dirname, 'public')));
// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
