// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. 
// The comments.html file should be a template with the following content:

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Comments</title>
// </head>
// <body>
//     <h1>Comments</h1>
//     <ul id="comments"></ul>
//     <form id="comment-form">
//         <input type="text" name="comment" placeholder="Enter your comment">
//         <button>Submit</button>
//     </form>
//     <script src="/comments.js"></script>
// </body>
// </html>
// The comments.js script should send a POST request to the /comments endpoint when the form is submitted. 
// The request should include the comment in the request body as a JSON object with a comment property. 
// The server should respond with a 201 status code and an empty body.

// You can use the following code to start the server:

// const express = require('express');
// const app = express();
// const fs = require('fs');
// const path = require('path');
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

// app.get('/comments.html', (req, res) => {
//     res.sendFile(path.join(__dirname, 'comments.html'));
// });

// app.post('/comments', (req, res) => {
//     const comment = req.body.comment;
//     res.sendStatus(201);
// });

// app.listen(3000, () => {
//     console.log('Server listening on port 3000');
// });
// Your solution should be in a file called comments.js.

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/comments.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'comments.html'));
});

app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    res.sendStatus(201);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});