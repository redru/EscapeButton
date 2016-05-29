const express = require('express'),
    bodyParser = require('body-parser');

const app = express();

// Client resources
app.use('/client/lib', express.static('./bower_components'));

// Application
app.use('/', express.static('./app'));

app.listen(3000, function () {
    console.log('Server listening on http://localhost:3000');
});
