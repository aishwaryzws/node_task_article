const express = require('express')
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const xss = require('xss-clean')


const config = require('./config/constants');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(xss())
app.use(cors());

app.set('view engine', 'ejs');
app.use('/uploads', express.static('uploads'));

app.use(function(req, res, next) {
    var allowed_origins = [
        'http://localhost:8080',
        process.env.REFERRER || new Date().getTime() //FOR API CHECK REFERRER
    ];

    var isTrueOrifin = allowed_origins.includes(req.headers.origin);
    if (isTrueOrifin == true) {
        next();
    } else {
        var isTrueReferre = allowed_origins.includes(req.headers.referrer || req.headers.referer);
        if (isTrueReferre == true) {
            next();
        } else {
            res.status(401).send('Invalid Request');
        }

    }
});

app.use('/', router);
require('./routes/routes')(router);

app.use("*", function(req, res) {
    res.status(404).send('<center><h3>Not Found</h3></center>');
});

app.listen(config.port, () => {
    console.log('app listening on port ' + config.port)
});

module.exports = app;