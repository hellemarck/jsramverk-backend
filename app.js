const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const port = 1337;

const index = require('./routes/index');
const reports = require('./routes/reports');
const register = require('./routes/register');
const login = require('./routes/login');

app.use(cors());

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

// This is middleware called for all routes - called before the routes
// Middleware takes three parameters.
app.use((req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    next();
});


app.use('/', index);
app.use('/reports', reports);
app.use('/register', register);
app.use('/login', login);


//sending error to own error handler
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }

    res.status(err.status || 500).json({
        "errors": [
            {
                "status": err.status,
                "title":  err.message,
                "detail": err.message
            }
        ]
    });
});

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Add routes for 404 and error handling
// Catch 404 and forward to error handler
// Put this last
app.use((req, res, next) => {
    var err = new Error("Not Found");

    err.status = 404;
    next(err);
});


// Start up server
// if (process.env.NODE_ENV == 'test') {
//     const server = app.listen(1338);
//     return server;
// } else {
const server = app.listen(port, () => console.log(`Example API listening on port ${port}!`));
//     return server;
// }

module.exports = server;
