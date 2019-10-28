let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const expressHbs = require('express-handlebars');
app.engine(
    'hbs',
    expressHbs({
        layoutsDir:'views/',
        defaultLayout: 'main-layout',
        extname: 'hbs'
    })
);

app.set('view engine', 'hbs');
app.set('views', 'views');

let artRoutes = require('./routes/artRoutes');

app.use('/public', express.static(path.join(__dirname,'/public')));
app.use('/views', express.static(path.join(__dirname,'/views')));
app.use(artRoutes);

app.get('/', (req,res) => {
    res.redirect(301, '/art');
});

const port = process.env.PORT || 3000
var server = app.listen(port,() => {
    console.log("Server started", port);
});
