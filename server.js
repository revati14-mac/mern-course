// ─── server.js ─────────────────────────────

// Load the Express package

const express = require('express');

 

// Create an Express application

const app = express();

 

// Define the port number our server will listen on

const PORT = 3000;

 

// ─── ROUTES ────────────────────────────────

// Route 1: Home page

app.get('/', function(req, res) {

    res.send('<h1>Welcome to My MERN Server!</h1><p>The server is running on Day 3.</p>');

});

 

// Route 2: About page

app.get('/about', function(req, res) {

    res.send('<h1>About Page</h1><p>This server is built with Node.js and Express.js</p>');

});

 

// Route 3: Students page

app.get('/students', function(req, res) {

    res.send('<h1>Students</h1><p>This page will show student data later!</p>');

});



//Route 4: Contact

app.get('/contact', function(req, res) {
    
    res.send('<h1>Contach Us</h1><p>Revati mohadare</p><p>revati@123</p><p>Tulsiramji Gaikwad Patil college of Engineering and Technology</p>');

});


//Route 5: course

app.get('/courses', function(req, res) {

    res.send('<h1>Current semester subjects list</h1><ul><li>Operating system</li><li>Software engineering and testing</li><li>ENDS</li><li>Seminar and project initiation course</li>');

});
 

// Route : Dynamic welcome route

app.get('/welcome/:name', function(req, res) {

    let name = req.params.name;
    res.send('<h1>Welcome, ' + name + '!</h1>');
});

// ─── START SERVER ──────────────────────────

// Tell the server to start listening for requests

app.listen(PORT, function() {

    console.log('Server is running at http://localhost:' + PORT);

    console.log('Press Ctrl + C to stop the server');

});