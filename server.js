const express = require('express');
const path = require('path');
const app = express();
const PORT = 8989;

var cors = require('cors')
var fs = require('fs');

app.use(cors());


app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// setting middleware
app.use(express.static(path.join(__dirname, 'public')));


// add routes
app.get('/abc', (req, res) => {
    res.send('Hello ABC');
});



// entitlement
app.post('/mock/api/entitlements', (req, res) => {
	console.log("entitlements request");
	res.setHeader('Content-Type', 'application/json');
	var readable = fs.createReadStream(path.join(__dirname, 'public', 'entitlements.json'));
	readable.pipe(res);
});

// accounts summary
app.get('/mock/api/summary/account-loan-deposit', (req, res) => {
	console.log("entitlements request");
	res.setHeader('Content-Type', 'application/json');
	var readable = fs.createReadStream(path.join(__dirname, 'public', 'accounts-summary.json'));
	readable.pipe(res);
});

// cards summary
app.get('/mock/api/summary/cards', (req, res) => {
	console.log("entitlements request");
	res.setHeader('Content-Type', 'application/json');
	var readable = fs.createReadStream(path.join(__dirname, 'public', 'cards-summary.json'));
	readable.pipe(res);
});



app.listen(PORT, () => {
    console.log(`Server successfully running on port: ${PORT}`);
});